/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { User, BookOpen, FileText, CheckCircle2, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    bookTitle: '',
    category: '',
    pages: '',
    bookSize: 'A5',
    interiorOption: 'Black & White',
    manuscriptContent: 'Text Only',
    additionalNotes: '',
    copyCount: '500' // Default copies for estimation
  });

  const [submitted, setSubmitted] = useState(false);

  const [referenceId, setReferenceId] = useState(0);

  const countries = [
    'Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'Nigeria', 'Ghana', 'South Africa', 'United Kingdom', 'United States', 'Other'
  ];

  const categories = [
    'Self-Help', 'Christian Book', 'Novel', 'Biography', 'Textbook', 'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateEstimate = () => {
    const pages = parseInt(formData.pages) || 100;
    const copies = parseInt(formData.copyCount) || 500;
    
    // Pricing formula based on Wondrous scale coefficients
    let baseRate = 3.5; // KES per page for standard A5 black & white
    if (formData.interiorOption === 'Full Colour') baseRate = 12.0;
    if (formData.bookSize === 'A4') baseRate *= 1.8;
    if (formData.bookSize === 'A6') baseRate *= 0.75;
    
    let contentSurcharge = 1.0;
    if (formData.manuscriptContent === 'Images / Illustrations') contentSurcharge = 1.15;
    if (formData.manuscriptContent === 'Tables / Diagrams') contentSurcharge = 1.1;

    const baseCostPerBook = pages * baseRate * contentSurcharge;
    const printingSetupCost = 15000; // Plate layout setup fee
    const totalKES = Math.round((baseCostPerBook * copies) + printingSetupCost);
    const costPerBook = Math.round(totalKES / copies);
    const totalUSD = Math.round(totalKES / 130);

    return { totalKES, totalUSD, costPerBook };
  };

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.email || !formData.phone || !formData.country)) {
      alert('Please fill out all required fields in the Personal Information section.');
      return;
    }
    if (step === 2 && (!formData.category || !formData.pages)) {
      alert('Please specify the book category and estimated pages.');
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReferenceId(Math.floor(Math.random() * 10000));
    setSubmitted(true);
  };

  const estimate = calculateEstimate();

  return (
    <div className="w-full max-w-4xl mx-auto font-sans">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
          Request A Printing Quote
        </h2>
        <p className="text-slate-600 mt-2 leading-relaxed">
          Unlock high-impact printing. Under our "Arithmeo" principle, customize your book specifications to receive a live estimated cost structure instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Dynamic Estimate (Arithmeo Panel) */}
        <div className="lg:col-span-4 bg-emerald-950 text-white p-6 rounded-3xl border border-emerald-800 shadow-xl lg:sticky lg:top-24">
          <div className="flex items-center gap-2 mb-4 text-emerald-300">
            <Calculator size={18} />
            <span className="text-xs uppercase font-extrabold tracking-widest font-mono">Arithmeo Estimate</span>
          </div>

          <p className="text-xs text-emerald-200/80 leading-relaxed mb-6">
            Our algorithm computes printing costs based on paper grades, ink volume, and setup matrices. Modify inputs to fine-tune your budgets.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-[10px] uppercase font-bold tracking-wider text-emerald-400 mb-1">
                Print Order Quantity
              </label>
              <select
                name="copyCount"
                value={formData.copyCount}
                onChange={handleInputChange}
                className="w-full bg-emerald-900/60 border border-emerald-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 font-semibold"
              >
                <option value="100">100 copies (Short-run)</option>
                <option value="250">250 copies (Starter-pack)</option>
                <option value="500">500 copies (Recommended)</option>
                <option value="1000">1000 copies (Standard Release)</option>
                <option value="2000">2000+ copies (Bulk Print)</option>
              </select>
            </div>

            <div className="h-px bg-emerald-800/60 my-4" />

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="opacity-70">Size & Option:</span>
                <span className="font-bold text-amber-300 font-mono">{formData.bookSize} | {formData.interiorOption}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="opacity-70">Pages:</span>
                <span className="font-bold font-mono">{formData.pages || '100'} pgs</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="opacity-70">Unit Cost (Est):</span>
                <span className="font-bold font-mono text-emerald-300">KES {estimate.costPerBook}</span>
              </div>
            </div>

            <div className="h-px bg-emerald-800/60 my-4" />

            <div className="text-center">
              <p className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">Estimated Total Budget</p>
              <h3 className="text-3xl font-display font-extrabold text-white mt-1">
                KES {estimate.totalKES.toLocaleString()}
              </h3>
              <p className="text-xs text-emerald-300 font-medium mt-0.5">
                ~ USD ${estimate.totalUSD.toLocaleString()}
              </p>
            </div>

            <div className="text-[10px] text-emerald-300/60 leading-tight text-center bg-emerald-900/40 p-2.5 rounded-xl border border-emerald-800/50 mt-4">
              Note: This is an analytical estimation. Final invoices will include customized bulk shipping and literary rights adjustments.
            </div>
          </div>
        </div>

        {/* Right Side: Form Wizard */}
        <div className="lg:col-span-8 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step indicator */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div className="flex gap-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        step === s
                          ? 'bg-emerald-800 text-white scale-110 shadow-sm'
                          : step > s
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {s}
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
                  Step {step} of 3
                </span>
              </div>

              <AnimatePresence mode="wait">
                {/* STEP 1: Personal Info */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-display font-bold text-slate-800 flex items-center gap-2">
                      <User size={18} className="text-emerald-700" />
                      <span>Personal Information</span>
                    </h3>
                    <p className="text-xs text-slate-500 mb-4">Please fill in your primary contact points so we can deliver a formalized PDF prospectus.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:outline-none focus:border-emerald-600 transition-all"
                          placeholder="MK Cyprian"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:outline-none focus:border-emerald-600 transition-all"
                          placeholder="cyprian@wondrouspublishing.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:outline-none focus:border-emerald-600 transition-all"
                          placeholder="+254 798 872 998"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Country of Residence *
                        </label>
                        <select
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:outline-none focus:border-emerald-600 transition-all font-medium"
                        >
                          <option value="">Select your country</option>
                          {countries.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Book Specifications */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-display font-bold text-slate-800 flex items-center gap-2">
                      <BookOpen size={18} className="text-emerald-700" />
                      <span>Book Information & Spec</span>
                    </h3>
                    <p className="text-xs text-slate-500 mb-4">Set your parameters below. Our pricing calculates offset setup matrices in real-time.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Book Title (Optional)
                        </label>
                        <input
                          type="text"
                          name="bookTitle"
                          value={formData.bookTitle}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:outline-none focus:border-emerald-600 transition-all"
                          placeholder="e.g. Rising Leaders"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Book Category *
                        </label>
                        <select
                          name="category"
                          required
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:outline-none focus:border-emerald-600 transition-all font-medium"
                        >
                          <option value="">Select a category</option>
                          {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Number of pages *
                        </label>
                        <input
                          type="number"
                          name="pages"
                          required
                          min="10"
                          max="2000"
                          value={formData.pages}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:outline-none focus:border-emerald-600 transition-all font-mono"
                          placeholder="Enter the total pages"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Book Size *
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {['A6', 'A5', 'B5', 'A4'].map((sz) => (
                            <button
                              key={sz}
                              type="button"
                              onClick={() => handleRadioChange('bookSize', sz)}
                              className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                                formData.bookSize === sz
                                  ? 'bg-emerald-800 text-white border-emerald-800'
                                  : 'bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100'
                              }`}
                            >
                              {sz}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">
                          Interior Print Option *
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {['Black & White', 'Full Colour'].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => handleRadioChange('interiorOption', opt)}
                              className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                                formData.interiorOption === opt
                                  ? 'bg-emerald-800 text-white border-emerald-800'
                                  : 'bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">
                          Manuscript Content *
                        </label>
                        <select
                          name="manuscriptContent"
                          value={formData.manuscriptContent}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:outline-none focus:border-emerald-600 transition-all font-medium"
                        >
                          <option value="Text Only">Text Only</option>
                          <option value="Images / Illustrations">Images / Illustrations</option>
                          <option value="Tables / Diagrams">Tables / Diagrams</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Additional Details */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-display font-bold text-slate-800 flex items-center gap-2">
                      <FileText size={18} className="text-emerald-700" />
                      <span>Additional Details</span>
                    </h3>
                    <p className="text-xs text-slate-500 mb-4">Provide details on layout styling, paper weight requirements, or custom finishing.</p>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Additional Notes or Special Requests
                      </label>
                      <textarea
                        name="additionalNotes"
                        rows={4}
                        value={formData.additionalNotes}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-xs focus:bg-white focus:outline-none focus:border-emerald-600 transition-all leading-relaxed"
                        placeholder="e.g. I require a high-gloss spot UV finish on my cover, and 80gsm cream woodfree book paper for the interior pages..."
                      />
                    </div>

                    <div className="bg-slate-50 rounded-2xl border border-slate-100 p-4">
                      <h4 className="text-xs font-bold text-slate-800 mb-1.5">Included Free Bonuses (Wondrous Guarantee)</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 text-[11px] leading-relaxed font-medium">
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                          <span>Professional Book Layout & Graphic Design</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                          <span>Global ISBN Secure Issuance</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                          <span>National Copyright Legal Registration</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                          <span>Afrisite & Somaflex Store Upload</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-md"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-extrabold rounded-lg transition-colors cursor-pointer shadow-lg shadow-emerald-800/15"
                  >
                    Submit Quotation Request
                  </button>
                )}
              </div>
            </form>
          ) : (
            /* Submission Success Panel */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={32} />
              </div>

              <div>
                <h3 className="text-xl font-display font-extrabold text-slate-900">
                  Quotation Sent Successfully!
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto mt-1.5 leading-relaxed">
                  Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our "Arithmeo" calculations have been recorded. A formalized PDF quotation contract has been dispatched to <strong className="text-emerald-800">{formData.email}</strong>.
                </p>
              </div>

              <div className="max-w-md mx-auto border border-slate-100 bg-slate-50/50 p-4 rounded-2xl text-left text-xs font-medium space-y-1.5 text-slate-600">
                <p><span className="text-slate-400">Reference:</span> <strong className="font-mono text-slate-900">WP-2026-{referenceId}</strong></p>
                <p><span className="text-slate-400">Title:</span> {formData.bookTitle || 'Untitled destiny work'}</p>
                <p><span className="text-slate-400">Pages:</span> {formData.pages} pgs ({formData.bookSize})</p>
                <p><span className="text-slate-400">Interior Style:</span> {formData.interiorOption}</p>
                <p><span className="text-slate-400">Estimated Budget:</span> <span className="font-bold text-emerald-800">KES {estimate.totalKES.toLocaleString()} / USD ${estimate.totalUSD}</span></p>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      country: '',
                      bookTitle: '',
                      category: '',
                      pages: '',
                      bookSize: 'A5',
                      interiorOption: 'Black & White',
                      manuscriptContent: 'Text Only',
                      additionalNotes: '',
                      copyCount: '500'
                    });
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Request Another Quote
                </button>
                <a
                  href={`https://wa.me/254798872998?text=Hello%20Wondrous%20Publishing,%20I%20just%20submitted%20a%20printing%20quote%20for%20my%20book%20"${formData.bookTitle || 'My Manuscript'}"`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  Confirm on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
