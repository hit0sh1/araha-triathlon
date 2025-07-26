'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [activeTab, setActiveTab] = useState('swim')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  useEffect(() => {
    const eventDate = new Date('2026-04-15T07:00:00')
    
    const timer = setInterval(() => {
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const courseDetails = {
    swim: {
      distance: '1.5km',
      description: 'アラハビーチの透明度抜群の海を泳ぎます。波は穏やかで、初心者でも安心して参加できます。',
      tips: '水温は約25℃。ウェットスーツ着用可能です。'
    },
    bike: {
      distance: '40km',
      description: '海岸線を走る絶景コース。適度なアップダウンがあり、走りごたえ抜群です。',
      tips: '交通規制あり。エイドステーションは5km毎に設置。'
    },
    run: {
      distance: '10km',
      description: 'ビーチ沿いのフラットなコース。海風を感じながら走れます。',
      tips: '給水所は2.5km毎。日陰が少ないので帽子推奨。'
    }
  }

  const faqs = [
    {
      question: '初心者でも参加できますか？',
      answer: 'はい、初心者の方も大歓迎です。各種目に制限時間を設けており、安全面にも配慮しています。初心者向けの説明会も開催予定です。'
    },
    {
      question: 'レンタル品はありますか？',
      answer: 'ウェットスーツ、自転車のレンタルサービスがあります。事前予約制となりますので、エントリー時にお申し込みください。'
    },
    {
      question: '宿泊施設の紹介はありますか？',
      answer: '提携ホテルをご用意しています。参加者特別価格でご利用いただけます。詳細はエントリー後にご案内いたします。'
    },
    {
      question: '雨天の場合は中止になりますか？',
      answer: '小雨決行です。台風などの荒天時のみ中止となります。中止の場合は前日18時までに公式サイトでお知らせします。'
    }
  ]

  const testimonials = [
    {
      name: '山田 太郎',
      age: '35歳',
      comment: '沖縄の美しい海を泳げて最高でした！来年も絶対参加します。',
      time: '2:45:30'
    },
    {
      name: '佐藤 花子',
      age: '28歳',
      comment: '初めてのトライアスロンでしたが、スタッフのサポートが手厚く安心して完走できました。',
      time: '3:15:45'
    },
    {
      name: '鈴木 一郎',
      age: '42歳',
      comment: 'コースの景色が素晴らしく、苦しい時も頑張れました。運営も完璧でした。',
      time: '2:30:15'
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070"
            alt="Ocean background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            アラハビーチ<br />トライアスロン大会
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            美しい沖縄の海で開催される究極のトライアスロン体験
          </p>
          
          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
              <div className="text-sm text-gray-200">日</div>
            </div>
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
              <div className="text-sm text-gray-200">時間</div>
            </div>
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
              <div className="text-sm text-gray-200">分</div>
            </div>
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
              <div className="text-sm text-gray-200">秒</div>
            </div>
          </div>
          
          <div className="space-x-4">
            <Link 
              href="/entry"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              エントリー申込
            </Link>
            <button 
              onClick={() => scrollToSection('event-info')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              大会詳細
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">大会のハイライト</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500</div>
              <div className="text-lg">参加者数</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">51.5</div>
              <div className="text-lg">総距離(km)</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">¥100万</div>
              <div className="text-lg">優勝賞金</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15</div>
              <div className="text-lg">エイドステーション</div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Info with Tabs */}
      <section id="event-info" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">大会概要</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">各種目の詳細情報をご確認ください</p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-1 inline-flex">
            {['swim', 'bike', 'run'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
                {tab === 'swim' ? 'スイム' : tab === 'bike' ? 'バイク' : 'ラン'}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-6xl mb-4">
                {activeTab === 'swim' ? '🏊‍♂️' : activeTab === 'bike' ? '🚴‍♂️' : '🏃‍♂️'}
              </div>
              <h3 className="text-3xl font-bold mb-2">
                {activeTab === 'swim' ? 'スイム' : activeTab === 'bike' ? 'バイク' : 'ラン'}
              </h3>
              <p className="text-2xl text-orange-500 font-bold mb-4">
                {courseDetails[activeTab as keyof typeof courseDetails].distance}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {courseDetails[activeTab as keyof typeof courseDetails].description}
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  <strong>ポイント:</strong> {courseDetails[activeTab as keyof typeof courseDetails].tips}
                </p>
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <img
                src={
                  activeTab === 'swim' ? 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000' :
                  activeTab === 'bike' ? 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=1000' :
                  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000'
                }
                alt={activeTab}
                className="object-cover w-full h-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1000';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Map */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">コースマップ</h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-700 flex items-center justify-center">
                <p className="text-2xl text-gray-600 dark:text-gray-400">インタラクティブなコースマップ</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">1</div>
                <h4 className="font-semibold">スタート地点</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">アラハビーチ</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">2</div>
                <h4 className="font-semibold">トランジション</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">ビーチパーク内</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">3</div>
                <h4 className="font-semibold">フィニッシュ</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">アラハビーチ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time Schedule */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">タイムスケジュール</h2>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl p-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
              <div className="space-y-6">
                {[
                  { time: '5:00', event: '会場オープン・受付開始', icon: '🏁' },
                  { time: '6:00', event: '開会式・競技説明', icon: '📢' },
                  { time: '6:45', event: 'ウォーミングアップ', icon: '🏃‍♂️' },
                  { time: '7:00', event: '競技スタート', icon: '🚀' },
                  { time: '10:00', event: '表彰式（予定）', icon: '🏆' },
                  { time: '11:00', event: '閉会式', icon: '🎊' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="text-xl font-bold text-gray-800 dark:text-gray-100">{item.time}</div>
                      <div className="text-gray-600 dark:text-gray-300">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">過去の大会の様子</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`https://images.unsplash.com/photo-${
                    i === 1 ? '1551698618-1dfe5d97d256' :
                    i === 2 ? '1544551763-46a013bb70d5' :
                    i === 3 ? '1502744688674-c619d1586c9e' :
                    i === 4 ? '1571019613454-1cb2f99b2d8b' :
                    i === 5 ? '1461896836934-ffe607ba8211' :
                    '1549298916-f52d724204b4'
                  }?q=80&w=600`}
                  alt={`Gallery ${i}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=600';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-semibold">2024年大会の様子</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">参加者の声</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.age} / 完走タイム: {testimonial.time}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">&ldquo;{testimonial.comment}&rdquo;</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">よくある質問</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="font-semibold text-gray-800 dark:text-gray-100">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 border-t dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">アクセス情報</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800 dark:text-gray-100">
                <span className="text-3xl mr-3">🚗</span>
                車でのアクセス
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▸</span>
                  那覇空港から約40分
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▸</span>
                  駐車場：500台（無料）
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▸</span>
                  当日は5:00から開場
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800 dark:text-gray-100">
                <span className="text-3xl mr-3">🚌</span>
                公共交通機関
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▸</span>
                  那覇バスターミナルから路線バス
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▸</span>
                  アラハビーチ前バス停下車
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">▸</span>
                  当日は臨時バス運行予定
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">スポンサー</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center justify-center h-24 hover:shadow-lg transition-shadow">
                <p className="text-gray-400 dark:text-gray-500 font-semibold">スポンサー {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">挑戦を、始めよう。</h2>
          <p className="text-xl mb-8">
            アラハビーチトライアスロンで、新しい自分を発見してください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
            <Link
              href="/entry"
              className="inline-block bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 text-center"
            >
              今すぐエントリー
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              パンフレットをダウンロード
            </button>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          href="/entry"
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all transform hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </Link>
      </div>
    </main>
  );
}