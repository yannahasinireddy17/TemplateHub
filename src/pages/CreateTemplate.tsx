import React, { useState } from 'react';
import { UploadCloud, Link as LinkIcon, Image as ImageIcon, FileText, Tag, LayoutList, CheckCircle } from 'lucide-react';
import { categories } from '../data/templates';
import { useNavigate } from 'react-router-dom';

export default function CreateTemplate() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'social-media',
    thumbnailUrl: '',
    templateUrl: '',
    tags: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to save template
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Redirect to home after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#191919] px-4">
        <div className="bg-[#2a2a2a] p-8 rounded-2xl border border-gray-800 text-center max-w-md w-full animate-in zoom-in duration-300">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-[#10B981]" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Template Published!</h2>
          <p className="text-gray-400 mb-6">Your template has been successfully uploaded and is now live on TemplateHub.</p>
          <div className="w-full bg-gray-700 rounded-full h-1.5 mb-4 overflow-hidden">
            <div className="bg-[#10B981] h-1.5 rounded-full animate-[pulse_2s_ease-in-out_infinite]" style={{ width: '100%' }}></div>
          </div>
          <p className="text-sm text-gray-500">Redirecting to home...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#191919] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Create New Template</h1>
          <p className="text-gray-400 mt-2">Share your creative setups, layouts, and planners with the community.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#2a2a2a] rounded-2xl shadow-xl border border-gray-800 overflow-hidden">
          <div className="p-8 space-y-8">
            
            {/* Title & Description */}
            <div className="space-y-5">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <FileText className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                  Template Title
                </label>
                <input 
                  type="text" 
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Minimalist Startup Pitch Deck" 
                  className="w-full bg-[#191919] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <LayoutList className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                  Description
                </label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Describe your template... What is it used for? Who is it for?" 
                  className="w-full bg-[#191919] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-colors resize-none"
                />
              </div>
            </div>

            {/* Category & Tags */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#191919]/50 rounded-xl border border-gray-800/50">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-[#191919] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-colors appearance-none"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <Tag className="w-4 h-4 mr-2 text-[#10B981]" />
                  Tags (comma separated)
                </label>
                <input 
                  type="text" 
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="e.g., startup, pitch, orange" 
                  className="w-full bg-[#191919] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-colors"
                />
              </div>
            </div>

            {/* Media & Links */}
            <div className="space-y-5">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <ImageIcon className="w-4 h-4 mr-2 text-[#EA580C]" />
                  Thumbnail Image URL
                </label>
                <input 
                  type="url" 
                  name="thumbnailUrl"
                  value={formData.thumbnailUrl}
                  onChange={handleChange}
                  required
                  placeholder="https://images.unsplash.com/..." 
                  className="w-full bg-[#191919] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors"
                />
                <p className="text-xs text-gray-500 mt-2">Provide a high-quality preview image URL for your template.</p>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                  <LinkIcon className="w-4 h-4 mr-2 text-[#60A5FA]" />
                  Template Link (Figma, Notion, Canva, etc.)
                </label>
                <input 
                  type="url" 
                  name="templateUrl"
                  value={formData.templateUrl}
                  onChange={handleChange}
                  required
                  placeholder="https://www.figma.com/file/..." 
                  className="w-full bg-[#191919] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA] transition-colors"
                />
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="px-8 py-5 bg-gray-800/30 border-t border-gray-800 flex justify-end items-center gap-4">
            <button 
              type="button"
              onClick={() => navigate('/')}
              className="px-6 py-2.5 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center px-6 py-2.5 bg-[#10B981] hover:bg-[#059669] text-white text-sm font-bold rounded-xl transition-all disabled:opacity-70 shadow-lg shadow-green-900/20"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              ) : (
                <UploadCloud className="w-4 h-4 mr-2" />
              )}
              {isSubmitting ? 'Publishing...' : 'Publish Template'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}