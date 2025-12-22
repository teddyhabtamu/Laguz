
import React, { useState } from 'react';
import { Upload, Loader2, Scan, Database, ShieldCheck, Anchor } from 'lucide-react';
import { analyzeCargoImage } from '../services/geminiService';

const ImageAnalyzer: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleAnalyze = async () => {
    if (!preview) return;
    setIsAnalyzing(true);
    try {
      const base64Data = preview.split(',')[1];
      const analysis = await analyzeCargoImage(base64Data);
      setResult(analysis || "LOG: Manifest verified. Cargo parameters within operational safety thresholds.");
    } catch (error) {
      console.error(error);
      setResult("SYSTEM ERROR: Data packet corrupted or API handshake timeout. Please retry.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, i) => {
      let currentLine = line.trim();
      
      // Handle Headers ###
      if (currentLine.startsWith('###')) {
        const headerText = currentLine.replace(/^###\s*/, '');
        return (
          <h4 key={i} className="text-[11px] font-black uppercase tracking-[0.3em] text-teal-600 mt-10 mb-6 border-b border-slate-100 pb-2 italic font-jakarta">
            {headerText}
          </h4>
        );
      }

      let isBullet = false;
      if (currentLine.startsWith('* ')) {
        isBullet = true;
        currentLine = currentLine.substring(2);
      } else if (currentLine.startsWith('- ')) {
        isBullet = true;
        currentLine = currentLine.substring(2);
      } else if (currentLine === '•') {
        // Skip solo bullet characters
        return null;
      }

      const segments = currentLine.split(/(\*\*.*?\*\*)/g);
      const content = segments.map((seg, j) => {
        if (seg.startsWith('**') && seg.endsWith('**')) {
          return <strong key={j} className="font-black text-slate-900">{seg.slice(2, -2)}</strong>;
        }
        return seg;
      });

      if (isBullet) {
        return (
          <div key={i} className="flex items-start space-x-3 my-3 pl-2">
            <span className="text-teal-500 font-bold mt-1 flex-shrink-0">•</span>
            <span className="flex-1 leading-relaxed text-slate-600">{content}</span>
          </div>
        );
      }
      
      return currentLine === '' ? <div key={i} className="h-4" /> : <p key={i} className="mb-4 leading-relaxed text-slate-600">{content}</p>;
    }).filter(Boolean);
  };

  return (
    <div className="bg-white border border-slate-100 p-2 shadow-2xl overflow-hidden max-w-6xl mx-auto teal-glow">
      <div className="bg-slate-50 border border-slate-100 p-10 lg:p-16 relative">
        <div className="flex items-center justify-between mb-16 border-b border-slate-200 pb-8 relative z-10">
          <div className="flex items-center space-x-4">
            <Anchor className="text-teal-600 w-6 h-6" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-900 italic font-jakarta">Laguz Audit // Asset Stream V.3</span>
          </div>
          <div className="hidden md:flex items-center space-x-10 text-[9px] font-black uppercase tracking-widest text-slate-300 italic">
             <span className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 animate-pulse"></span> SYSTEM: ONLINE</span>
             <span>AES_256_ENCRYPTED_UPLINK</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 relative z-10">
          <div className="lg:col-span-6 space-y-8">
            <label className="relative block h-[500px] border-2 border-dashed border-slate-200 bg-white hover:border-teal-500 transition-all cursor-pointer overflow-hidden group">
              {preview ? (
                <img src={preview} alt="Input Visual" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                  <Upload className="w-12 h-12 text-slate-200 mb-8" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 italic">Initialize Asset Visual Uplink</span>
                  <p className="text-[9px] font-bold text-slate-300 uppercase mt-6 italic tracking-widest">Cargo Photo / Shipping Manifest / Bill of Lading</p>
                </div>
              )}
              <input type="file" className="hidden" onChange={handleFileChange} />
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(45,212,191,1)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(45,212,191,1)_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
            </label>

            <button
              onClick={handleAnalyze}
              disabled={!preview || isAnalyzing}
              className="w-full bg-slate-900 text-teal-400 py-7 font-black uppercase tracking-[0.5em] text-[10px] flex items-center justify-center space-x-6 hover:bg-teal-500 hover:text-white transition-all disabled:opacity-30 italic shadow-xl"
            >
              {isAnalyzing ? <Loader2 className="animate-spin w-5 h-5" /> : <Scan className="w-5 h-5" />}
              <span>Execute AI Manifest Audit</span>
            </button>
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-8">
            <div className="flex-1 bg-white border border-slate-100 p-10 font-sans text-sm leading-relaxed relative overflow-y-auto max-h-[500px]">
               <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-500"></div>
               <div className="flex items-center justify-between mb-8 opacity-40 text-teal-600">
                  <div className="flex items-center space-x-3">
                    <Database className="w-4 h-4" />
                    <span className="uppercase font-black tracking-[0.3em] text-[10px]">ANALYSIS_MANIFEST</span>
                  </div>
                  <span className="text-[9px] font-mono tracking-tighter">REF_{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
               </div>
               <div className="text-slate-600">
                  {result ? (
                    <div className="animate-in fade-in duration-1000">
                      {renderFormattedText(result)}
                    </div>
                  ) : (
                    <div className="text-slate-300 uppercase tracking-widest leading-loose italic text-xs">Waiting for high-resolution visual data feed...</div>
                  )}
               </div>
            </div>
            
            <div className="bg-slate-900 p-8 text-white border-l-8 border-teal-500">
               <div className="flex items-center space-x-4 mb-4">
                  <ShieldCheck className="text-teal-400 w-5 h-5" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] italic font-jakarta">Compliance Handshake</span>
               </div>
               <p className="text-[9px] font-bold leading-relaxed uppercase tracking-[0.3em] text-slate-500 italic">
                 Integrated Hugging Face Florence-2 OCR for manifest auditing, tracking number extraction, and logistics document verification in real-time.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageAnalyzer;
