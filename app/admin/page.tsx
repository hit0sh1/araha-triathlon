'use client'

import { useState } from 'react'

interface Entry {
  id: number
  name: string
  email: string
  category: string
  registrationDate: string
  paymentStatus: 'paid' | 'pending'
}

export default function AdminPage() {
  const [entries] = useState<Entry[]>([
    {
      id: 1,
      name: '山田太郎',
      email: 'yamada@example.com',
      category: '一般',
      registrationDate: '2026-01-15',
      paymentStatus: 'paid'
    },
    {
      id: 2,
      name: '佐藤花子',
      email: 'sato@example.com',
      category: '学生',
      registrationDate: '2026-01-16',
      paymentStatus: 'pending'
    },
    {
      id: 3,
      name: '鈴木一郎',
      email: 'suzuki@example.com',
      category: '一般',
      registrationDate: '2026-01-17',
      paymentStatus: 'paid'
    }
  ])

  const stats = {
    total: entries.length,
    paid: entries.filter(e => e.paymentStatus === 'paid').length,
    pending: entries.filter(e => e.paymentStatus === 'pending').length,
    general: entries.filter(e => e.category === '一般').length,
    student: entries.filter(e => e.category === '学生').length,
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">管理画面</h1>
        
        {/* 統計情報 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">総エントリー数</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">{stats.total}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">支払い済み</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">{stats.paid}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">未払い</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">{stats.pending}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">一般</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">{stats.general}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">学生</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">{stats.student}</p>
          </div>
        </div>

        {/* エントリー一覧 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">エントリー一覧</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    氏名
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    メールアドレス
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    カテゴリー
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    登録日
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    支払い状況
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {entries.map((entry) => (
                  <tr key={entry.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {entry.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {entry.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {entry.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {entry.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {entry.registrationDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        entry.paymentStatus === 'paid' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {entry.paymentStatus === 'paid' ? '支払い済み' : '未払い'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                        詳細
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        削除
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* エクスポートボタン */}
        <div className="mt-6 flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
            CSVエクスポート
          </button>
        </div>
      </div>
    </main>
  )
}