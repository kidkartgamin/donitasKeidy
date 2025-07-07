import React from 'react';

// Componente SVG del Logo
const DonitasLogo = ({ width = 60, height = 60 }) => (
  <svg width={width} height={height} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    {/* Donita base (marrón) */}
    <circle cx="50" cy="50" r="35" fill="#D2691E" stroke="#8B4513" strokeWidth="2"/>
    
    {/* Glaseado rosa */}
    <circle cx="50" cy="50" r="32" fill="#FF69B4"/>
    
    {/* Agujero de la donita */}
    <circle cx="50" cy="50" r="12" fill="#D2691E"/>
    <circle cx="50" cy="50" r="10" fill="white"/>
    
    {/* Chispitas coloridas */}
    <rect x="35" y="35" width="6" height="2" rx="1" fill="#00BFFF" transform="rotate(45 38 36)"/>
    <rect x="60" y="40" width="6" height="2" rx="1" fill="#32CD32" transform="rotate(-30 63 41)"/>
    <rect x="45" y="30" width="6" height="2" rx="1" fill="#FFD700" transform="rotate(15 48 31)"/>
    <rect x="65" y="55" width="6" height="2" rx="1" fill="#FF4500" transform="rotate(60 68 56)"/>
    <rect x="30" y="55" width="6" height="2" rx="1" fill="#9370DB" transform="rotate(-45 33 56)"/>
    <rect x="55" y="65" width="6" height="2" rx="1" fill="#00BFFF" transform="rotate(30 58 66)"/>
    <rect x="40" y="65" width="6" height="2" rx="1" fill="#32CD32" transform="rotate(-60 43 66)"/>
    <rect x="70" y="45" width="6" height="2" rx="1" fill="#FFD700" transform="rotate(75 73 46)"/>
    
    {/* Ojos */}
    <circle cx="42" cy="45" r="4" fill="white"/>
    <circle cx="58" cy="45" r="4" fill="white"/>
    <circle cx="42" cy="45" r="3" fill="#8B4513"/>
    <circle cx="58" cy="45" r="3" fill="#8B4513"/>
    <circle cx="43" cy="44" r="1" fill="white"/>
    <circle cx="59" cy="44" r="1" fill="white"/>
    
    {/* Sonrisa */}
    <path d="M 40 55 Q 50 65 60 55" stroke="#8B4513" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

export default function Home() {
  const whatsappNumber = "3157851999";
  const whatsappLink = `https://wa.me/57${whatsappNumber}`;
  const facebookLink = "https://www.facebook.com/share/19Hj4wcehm/";

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50">
      {/* Header con Logo y Contacto */}
      <header className="bg-white shadow-sm border-b-2 border-pink-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <DonitasLogo width={60} height={60} />
              <div>
                <h2 className="text-xl font-bold text-pink-600">DONITAS KEIDY</h2>
                <p className="text-sm text-gray-600">❤✨ Domicilio gratis a todo Cali</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-semibold text-gray-900">📞 315 785199</p>
                <div className="flex space-x-2 mt-1">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-3 py-1 rounded-full text-xs hover:bg-green-600 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a 
                    href={facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs hover:bg-blue-700 transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contenido Principal */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Donitas Keidy ❤✨<br />
                <span className="text-pink-600">Hechas para ti</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Donitas de varios precios, tamaños y sabores <br />
                <span className="text-gray-900 font-semibold">¡Elige la tuya!</span>
              </p>
            </div>

            <div className="flex space-x-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-pink-600 transition-colors"
              >
                Ordenar Ahora 🛍️
              </a>
              <a 
                href="tel:3157851999"
                className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-900 transition-colors"
              >
                Llamar 📞
              </a>
            </div>

          </div>

          {/* Menú de Donitas */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-pink-200">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-pink-600 mb-2">MENÚ: DONITAS KEIDY ❤✨</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">- DONAS CHORREADAS - 🤗</h3>
              <p className="text-lg font-medium text-gray-700">UNIDAD: $1.500</p>
            </div>

            <div className="space-y-4">
              <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">X4 Donitas</h4>
                    <p className="text-sm text-gray-600">(1 salsa - 1 toppings)</p>
                  </div>
                  <span className="text-xl font-bold text-pink-600">$6.000</span>
                </div>
              </div>

              <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">X6 Donitas</h4>
                    <p className="text-sm text-gray-600">(2 salsa - 1 toppings)</p>
                  </div>
                  <span className="text-xl font-bold text-pink-600">$9.000</span>
                </div>
              </div>

              <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">X8 Donitas</h4>
                    <p className="text-sm text-gray-600">(2 salsas - 2 toppings)</p>
                  </div>
                  <span className="text-xl font-bold text-pink-600">$12.000</span>
                </div>
              </div>

              <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">X12 Donitas</h4>
                    <p className="text-sm text-gray-600">(3 salsas - 3 toppings)</p>
                  </div>
                  <span className="text-xl font-bold text-pink-600">$16.000</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center bg-gradient-to-r from-pink-100 to-orange-100 rounded-lg p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-2">- DOMICILIOS HASTA -</h3>
              <p className="font-semibold text-pink-600 text-lg">LA PUERTA DE TU CASA 🏠</p>
              <p className="text-sm text-gray-600 mt-1">Gratis en todo Cali</p>
            </div>

            <div className="mt-6 flex justify-center">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center space-x-2"
              >
                <span>💬</span>
                <span>Pedir por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Características adicionales */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🚚</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Entrega Rápida</h3>
            <p className="text-gray-600 text-sm">Domicilio gratis a todo Cali</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🍩</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Frescas y Deliciosas</h3>
            <p className="text-gray-600 text-sm">Hechas al momento con amor</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">💝</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Variedad de Sabores</h3>
            <p className="text-gray-600 text-sm">Múltiples salsas y toppings</p>
          </div>
        </div>
      </div>
    </main>
  );
}
