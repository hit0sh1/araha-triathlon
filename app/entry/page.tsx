'use client'

import { useState } from 'react'

export default function EntryPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    gender: '',
    category: 'general',
    emergencyContact: '',
    emergencyPhone: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('エントリーを受け付けました！')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          大会エントリー
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 基本情報 */}
            <div className="border-b pb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">基本情報</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    氏名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    性別 <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="male">男性</option>
                    <option value="female">女性</option>
                  </select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    生年月日 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    required
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    カテゴリー <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="general">一般 (¥15,000)</option>
                    <option value="student">学生 (¥10,000)</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* 連絡先情報 */}
            <div className="border-b pb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">連絡先情報</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    電話番号 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            
            {/* 緊急連絡先 */}
            <div className="pb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">緊急連絡先</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    緊急連絡先氏名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="emergencyContact"
                    required
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    緊急連絡先電話番号 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    required
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            
            {/* 規約同意 */}
            <div className="pb-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  required
                  className="mt-1 mr-2"
                />
                <span className="text-sm text-gray-600">
                  大会規約および個人情報の取り扱いに同意します
                </span>
              </label>
            </div>
            
            {/* 送信ボタン */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
              >
                エントリーする
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}