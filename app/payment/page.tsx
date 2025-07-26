'use client'

import { useState } from 'react'

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('決済処理を開始します')
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          参加費のお支払い
        </h1>
        
        {/* 支払い情報 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">お支払い内容</h2>
          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">エントリー種別</span>
              <span className="font-semibold">一般</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">参加費</span>
              <span className="font-semibold">¥15,000</span>
            </div>
            <div className="flex justify-between pt-2 border-t">
              <span className="text-lg font-semibold">合計</span>
              <span className="text-lg font-bold text-orange-500">¥15,000</span>
            </div>
          </div>
        </div>

        {/* 支払い方法選択 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">お支払い方法</h2>
          
          <div className="space-y-4 mb-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="credit"
                checked={paymentMethod === 'credit'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-3"
              />
              <span className="text-gray-700">クレジットカード</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="bank"
                checked={paymentMethod === 'bank'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-3"
              />
              <span className="text-gray-700">銀行振込</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="convenience"
                checked={paymentMethod === 'convenience'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-3"
              />
              <span className="text-gray-700">コンビニ決済</span>
            </label>
          </div>

          {/* クレジットカード情報入力 */}
          {paymentMethod === 'credit' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  カード番号
                </label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    有効期限
                  </label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    セキュリティコード
                  </label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors mt-6"
              >
                ¥15,000 を支払う
              </button>
            </form>
          )}

          {/* 銀行振込情報 */}
          {paymentMethod === 'bank' && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-3">振込先情報</h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">銀行名:</span> 沖縄銀行</p>
                <p><span className="font-medium">支店名:</span> 北谷支店</p>
                <p><span className="font-medium">口座種別:</span> 普通</p>
                <p><span className="font-medium">口座番号:</span> 1234567</p>
                <p><span className="font-medium">口座名義:</span> アラハトライアスロン実行委員会</p>
              </div>
              <p className="text-red-500 text-sm mt-4">
                ※ 振込手数料はお客様負担となります
              </p>
              <button
                onClick={() => alert('振込情報を確認しました')}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors mt-6"
              >
                振込情報を確認しました
              </button>
            </div>
          )}

          {/* コンビニ決済情報 */}
          {paymentMethod === 'convenience' && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-3">対応コンビニ</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>セブンイレブン</li>
                <li>ローソン</li>
                <li>ファミリーマート</li>
                <li>ミニストップ</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                お支払い番号をメールでお送りします。<br />
                7日以内にお近くのコンビニでお支払いください。
              </p>
              <button
                onClick={() => alert('お支払い番号を送信しました')}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors mt-6"
              >
                お支払い番号を発行する
              </button>
            </div>
          )}
        </div>

        {/* セキュリティ情報 */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>すべての決済は SSL により暗号化されています</p>
        </div>
      </div>
    </main>
  )
}