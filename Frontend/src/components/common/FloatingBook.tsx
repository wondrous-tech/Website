import React, { useState, useRef, useEffect } from 'react'
import './FloatingBook.css'

interface StoryChapter {
  id: string;
  chapter: string;
  title: string;
  draftText: React.ReactNode;
  polishedText: React.ReactNode;
  dropCap: string;
  parchmentFooterUnedited: string;
  parchmentFooterFinal: string;
}

const CHAPTERS: StoryChapter[] = [
  {
    id: 'stargazer',
    chapter: 'CHAPTER I',
    title: 'The Stargazer',
    draftText: (
      <>
        The sky was <span className="strike-red">very black and dark</span> <span className="correction">indigo canvas</span>. Clara looked through her <span className="strike-red">really big telescope</span> <span className="correction">brass refractor</span>, trying to see the stars. She thought about her father <span className="strike-red">who had died long ago</span> <span className="correction">whose memory lingered like starlight</span>.
      </>
    ),
    polishedText: (
      <>
        An indigo canvas stretched across the observatory dome. Clara adjusted her brass refractor, capturing the distant fire of dying worlds. Beneath the cold stars, her father’s memory lingered—not as a shadow, but as a guiding constellation.
      </>
    ),
    dropCap: 'A',
    parchmentFooterUnedited: 'Folio I — Unedited',
    parchmentFooterFinal: 'Folio I — Final Text'
  },
  {
    id: 'alchemist',
    chapter: 'CHAPTER II',
    title: 'The Alchemist',
    draftText: (
      <>
        He put <span className="strike-red">some yellow stuff</span> <span className="correction">powdered sulfur</span> in the jar. It made a <span className="strike-red">bad smell and a big flash</span> <span className="correction">pungent emerald plume</span>. He wanted to make <span className="strike-red">gold to buy food</span> <span className="correction">philosopher\'s stone</span>.
      </>
    ),
    polishedText: (
      <>
        A pinch of powdered sulfur met the boiling crucible. Instantly, a pungent emerald plume spiraled toward the rafters. He cared little for common gold; his life was bound to a grander pursuit: the creation of the philosopher's stone.
      </>
    ),
    dropCap: 'A',
    parchmentFooterUnedited: 'Folio II — Unedited',
    parchmentFooterFinal: 'Folio II — Final Text'
  },
  {
    id: 'navigator',
    chapter: 'CHAPTER III',
    title: 'The Navigator',
    draftText: (
      <>
        The boat went <span className="strike-red">up and down on big waves</span> <span className="correction">surged through dark swells</span>. Silas held the <span className="strike-red">steering wheel really hard</span> <span className="correction">weathered helm</span>. He saw a <span className="strike-red">light from a lighthouse</span> <span className="correction">distant beacon pierce the fog</span>.
      </>
    ),
    polishedText: (
      <>
        The vessel surged through dark swells, shuddering against the sea\'s fury. Silas gripped the weathered helm, his knuckles white against the oak. Then, through a tear in the heavy fog, a distant beacon pierced the darkness.
      </>
    ),
    dropCap: 'T',
    parchmentFooterUnedited: 'Folio III — Unedited',
    parchmentFooterFinal: 'Folio III — Final Text'
  }
];

export function FloatingBook3D() {
  const [rotation, setRotation] = useState({ x: -15, y: -25, translateY: 0 })
  const [scale, setScale] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  
  const [currentChapter, setCurrentChapter] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next')
  
  const sceneRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0, isHovering: false })
  const dragStart = useRef({ x: 0, y: 0 })
  const rotationStart = useRef({ x: -15, y: -25, translateY: 0 })
  const targetRotation = useRef({ x: -15, y: -25, translateY: 0 })
  const isClick = useRef(true)
  const autoRotateFrame = useRef<number | null>(null)
  const time = useRef(0)

  // Smooth lerped animation loop
  useEffect(() => {
    const lerp = (start: number, end: number, amt: number) => {
      return start + (end - start) * amt
    }

    const animate = () => {
      time.current += 0.008
      const bob = Math.sin(time.current) * (isOpen ? 4 : 8)

      if (isDragging) {
        // When dragging, targetRotation is updated in onMouseMove
        targetRotation.current.translateY = bob
      } else {
        // Compute target rotation based on whether the mouse is hovering and if the book is open
        if (mousePos.current.isHovering) {
          if (isOpen) {
            // Keep the rotation mild when open so the pages are easily readable
            targetRotation.current = {
              x: -5 - mousePos.current.y * 12,
              y: 0 + mousePos.current.x * 12,
              translateY: bob,
            }
          } else {
            // Give dramatic 3D angles when closed
            targetRotation.current = {
              x: -15 - mousePos.current.y * 22,
              y: -25 + mousePos.current.x * 32,
              translateY: bob,
            }
          }
        } else {
          // Idle floating state
          if (isOpen) {
            targetRotation.current = {
              x: -5 + Math.cos(time.current * 0.5) * 1.5,
              y: 0 + Math.sin(time.current * 0.5) * 3,
              translateY: bob,
            }
          } else {
            targetRotation.current = {
              x: -15 + Math.cos(time.current * 0.5) * 4,
              y: -25 + Math.sin(time.current * 0.5) * 10,
              translateY: bob,
            }
          }
        }
      }

      // Smoothly interpolate current rotation towards target
      // Higher speed for responsive dragging, softer for hover tilt and floating
      const lerpSpeed = isDragging ? 0.16 : 0.07

      setRotation((prev) => ({
        x: lerp(prev.x, targetRotation.current.x, lerpSpeed),
        y: lerp(prev.y, targetRotation.current.y, lerpSpeed),
        translateY: lerp(prev.translateY, targetRotation.current.translateY, lerpSpeed),
      }))

      autoRotateFrame.current = requestAnimationFrame(animate)
    }

    autoRotateFrame.current = requestAnimationFrame(animate)
    return () => {
      if (autoRotateFrame.current) {
        cancelAnimationFrame(autoRotateFrame.current)
      }
    }
  }, [isDragging, isOpen])

  // Mouse & Touch Drag handlers
  const handleStart = (clientX: number, clientY: number) => {
    setIsDragging(true)
    isClick.current = true
    dragStart.current = { x: clientX, y: clientY }
    rotationStart.current = { 
      x: targetRotation.current.x, 
      y: targetRotation.current.y, 
      translateY: targetRotation.current.translateY 
    }
  }

  const handleMove = (clientX: number, clientY: number) => {
    const deltaX = clientX - dragStart.current.x
    const deltaY = clientY - dragStart.current.y

    // If moved more than a minor threshold, count it as a drag and not a click
    if (Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6) {
      isClick.current = false
    }

    if (!isDragging) return

    const speed = 0.5
    targetRotation.current = {
      x: Math.max(-60, Math.min(60, rotationStart.current.x - deltaY * speed)),
      y: rotationStart.current.y + deltaX * speed,
      translateY: targetRotation.current.translateY,
    }
  }

  const handleEnd = () => {
    setIsDragging(false)
  }

  // Handle scene-level mouse movement to capture coordinates for mouse follow tilt
  const handleSceneMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX, e.clientY)
      return
    }

    if (!sceneRef.current) return
    const rect = sceneRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    
    mousePos.current = { x, y, isHovering: true }
  }

  const handleSceneMouseLeave = () => {
    mousePos.current.isHovering = false
    handleEnd()
  }

  // Handle Wheel Event for Zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const zoomSpeed = 0.05
    const newScale = scale - e.deltaY * zoomSpeed * 0.01
    setScale(Math.max(0.6, Math.min(1.6, newScale)))
  }

  // Open toggle safeguarded against dragging releases.
  // Closing is explicitly handled via the close button or the bookmark ribbon to avoid accidental closures while reading or turning pages.
  const handleBookClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isClick.current && !isOpen) {
      setIsOpen(true)
    }
  }

  const handleNextChapter = (e: React.MouseEvent) => {
    e.stopPropagation()
    console.log('[Book3D] handleNextChapter clicked. currentChapter:', currentChapter, 'isFlipping:', isFlipping)
    if (isFlipping || currentChapter >= CHAPTERS.length - 1) {
      console.log('[Book3D] handleNextChapter guard activated. Return early.')
      return
    }

    setFlipDirection('next')
    setIsFlipping(true)
    setCurrentChapter(prev => {
      const nextVal = prev + 1
      console.log('[Book3D] Incrementing chapter to:', nextVal)
      return nextVal
    })
  }

  const handlePrevChapter = (e: React.MouseEvent) => {
    e.stopPropagation()
    console.log('[Book3D] handlePrevChapter clicked. currentChapter:', currentChapter, 'isFlipping:', isFlipping)
    if (isFlipping || currentChapter <= 0) {
      console.log('[Book3D] handlePrevChapter guard activated. Return early.')
      return
    }

    setFlipDirection('prev')
    setIsFlipping(true)
    setCurrentChapter(prev => {
      const nextVal = prev - 1
      console.log('[Book3D] Decrementing chapter to:', nextVal)
      return nextVal
    })
  }

  useEffect(() => {
    if (isFlipping) {
      const timer = setTimeout(() => {
        setIsFlipping(false)
      }, 900)
      return () => clearTimeout(timer)
    }
  }, [isFlipping])

  // Compute indices for background pages to align perfectly with flipping motion
  const leftPageIndex = isFlipping && flipDirection === 'next' ? currentChapter - 1 : currentChapter
  const rightPageIndex = isFlipping && flipDirection === 'prev' ? currentChapter + 1 : currentChapter

  return (
    <div 
      ref={sceneRef}
      className="book-3d-scene"
      onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
      onMouseMove={handleSceneMouseMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleSceneMouseLeave}
      onMouseEnter={() => { mousePos.current.isHovering = true }}
      onTouchStart={(e) => {
        if (e.touches[0]) {
          handleStart(e.touches[0].clientX, e.touches[0].clientY)
        }
      }}
      onTouchMove={(e) => {
        if (e.touches[0]) {
          handleMove(e.touches[0].clientX, e.touches[0].clientY)
        }
      }}
      onTouchEnd={handleEnd}
      onWheel={handleWheel}
      id="book-3d-interactive-scene"
    >
      <div 
        className={`book-3d-wrapper ${isOpen ? 'state-open' : 'state-closed'}`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale}) translateY(${rotation.translateY}px)`,
        }}
      >
        {/* Shadow Plane */}
        <div className="book-shadow-3d" />

        <div className="book-3d" onClick={handleBookClick}>
          {/* SPINE (Pivot reference on the left) */}
          <div className="book-spine">
            <div className="spine-text">WONDROUS PUBLISHING</div>
            <div className="spine-rib rib-1" />
            <div className="spine-rib rib-2" />
            <div className="spine-rib rib-3" />
            <div className="spine-rib rib-4" />
          </div>

          {/* Hanging Bookmark Ribbon */}
          <div 
            className="book-bookmark" 
            onClick={(e) => { 
              e.stopPropagation(); 
              setIsOpen(false); 
            }} 
            title="Close Book" 
          />

          {/* PAGES GROUP - Stacked pages on the inside */}
          <div className="book-pages">
            {/* Inner Left Page (hidden to prevent overlapping front-inside) */}
            <div className="page inner-left" style={{ pointerEvents: 'none', opacity: 0 }} />

            {/* Inner Right Page (background, showing edited text) */}
            <div 
              className="page inner-right"
              onClick={currentChapter < CHAPTERS.length - 1 ? handleNextChapter : (e) => { e.stopPropagation(); setIsOpen(false); }}
              style={{ cursor: 'pointer' }}
            >
              <div className="page-content parchment-bg">
                <div className="gold-filigree-inner" />
                <span className="editorial-stamp edited">After Editing</span>
                <h3 className="parchment-title">{CHAPTERS[rightPageIndex].title}</h3>
                <div className="parchment-divider" />
                <div className="editorial-manuscript polished-text">
                  <span className="drop-cap">{CHAPTERS[rightPageIndex].dropCap}</span>
                  {CHAPTERS[rightPageIndex].polishedText}
                </div>
                <div className="parchment-footer">
                  <span className="folio-page-num">{CHAPTERS[rightPageIndex].parchmentFooterFinal}</span>
                  {currentChapter < CHAPTERS.length - 1 ? (
                    <button
                      className="folio-nav-btn next-btn"
                      onClick={handleNextChapter}
                      title="Next Folio"
                    >
                      Next Folio →
                    </button>
                  ) : (
                    <button
                      className="folio-nav-btn next-btn close-book-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsOpen(false)
                      }}
                      title="Close Book"
                    >
                      ✕ Close Story
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Interactive 3D Flipping Page Sheet */}
            {isFlipping && (
              <div className={`page-turning-leaf direction-${flipDirection}`}>
                {/* Recto (Front, visible on right) */}
                <div className="leaf-face leaf-recto parchment-bg page-content">
                  <div className="gold-filigree-inner" />
                  <span className="editorial-stamp edited">After Editing</span>
                  <h3 className="parchment-title">
                    {CHAPTERS[flipDirection === 'next' ? currentChapter - 1 : currentChapter].title}
                  </h3>
                  <div className="parchment-divider" />
                  <div className="editorial-manuscript polished-text">
                    <span className="drop-cap">
                      {CHAPTERS[flipDirection === 'next' ? currentChapter - 1 : currentChapter].dropCap}
                    </span>
                    {CHAPTERS[flipDirection === 'next' ? currentChapter - 1 : currentChapter].polishedText}
                  </div>
                  <div className="parchment-footer">
                    {CHAPTERS[flipDirection === 'next' ? currentChapter - 1 : currentChapter].parchmentFooterFinal}
                  </div>
                </div>

                {/* Verso (Back, visible on left) */}
                <div className="leaf-face leaf-verso parchment-bg page-content">
                  <div className="gold-filigree-inner" />
                  <span className="editorial-stamp original">Before Editing</span>
                  <h3 className="parchment-title">
                    {CHAPTERS[flipDirection === 'next' ? currentChapter : currentChapter + 1].title}
                  </h3>
                  <div className="parchment-divider" />
                  <div className="editorial-manuscript draft-text">
                    {CHAPTERS[flipDirection === 'next' ? currentChapter : currentChapter + 1].draftText}
                  </div>
                  <div className="parchment-footer">
                    {CHAPTERS[flipDirection === 'next' ? currentChapter : currentChapter + 1].parchmentFooterUnedited}
                  </div>
                </div>
              </div>
            )}

            {/* Page Edges for real 3D depth */}
            <div className="page-edge-right" />
            <div className="page-edge-top" />
            <div className="page-edge-bottom" />
          </div>

          {/* BACK COVER (fixed at Z = -15px depth) */}
          <div className="cover book-back">
            <div className="cover-inner gold-border">
              <div className="gold-seal" />
            </div>
          </div>

          {/* FRONT COVER (pivots open from the spine corner) */}
          <div className="cover book-front">
            {/* Front Cover Front side */}
            <div className="cover-face front-outside">
              <div className="cover-inner gold-border">
                <div className="cover-grid" />
                <div className="gold-emboss-header">WONDROUS</div>
                <div className="cover-cta">Tap to see sample work</div>
                <div className="gold-emboss-footer">Editing • Manuscript Review</div>
              </div>
            </div>
            
            {/* Front Cover Back side (visible when book opens) */}
            <div 
              className="cover-face front-inside"
              onClick={currentChapter > 0 ? handlePrevChapter : undefined}
              style={{ cursor: currentChapter > 0 ? 'pointer' : 'default' }}
            >
              <div className="cover-inner parchment-bg page-content">
                <div className="gold-filigree-inner" />
                <span className="editorial-stamp original">Before Editing</span>
                <h3 className="parchment-title">{CHAPTERS[leftPageIndex].title}</h3>
                <div className="parchment-divider" />
                <div className="editorial-manuscript draft-text">
                  {CHAPTERS[leftPageIndex].draftText}
                </div>
                <div className="parchment-footer">
                  {currentChapter > 0 ? (
                    <button
                      className="folio-nav-btn prev-btn"
                      onClick={handlePrevChapter}
                      title="Previous Folio"
                    >
                      ← Prev Folio
                    </button>
                  ) : (
                    <button
                      className="folio-nav-btn prev-btn close-book-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsOpen(false)
                      }}
                      title="Close Book"
                    >
                      ✕ Close
                    </button>
                  )}
                  <span className="folio-page-num">{CHAPTERS[leftPageIndex].parchmentFooterUnedited}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
