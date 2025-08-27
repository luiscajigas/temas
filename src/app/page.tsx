export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200 text-gray-900 p-8 font-sans">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-6 space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-xl font-bold">Appearance</h1>
          <p className="text-sm text-gray-500">
            Set or customize your preferences for the system
          </p>
        </div>

        {/* Language */}
      <div className="border-t border-gray-200 pt-6">
  <label className="font-medium block mb-1">Language</label>
  <div className="flex items-center justify-between">
    <p className="text-sm text-gray-500">Select the language of the platform</p>
    <select className="border text-gray-600  border-gray-200 rounded px-3 py-2 min-w-[140px]">
      <option>English</option>
      <option>Español</option>
    </select>
  </div>
</div>

        {/* Interface theme */}
<div className="space-y-2 border-t border-gray-200 pt-6">
  <label className="block font-medium">Interface theme</label>
  <p className="text-sm text-gray-500">
    Customize your application appearance
  </p>

  <div className="grid grid-cols-3 gap-15  text-center">
    {[
      { id: 'auto', label: 'Auto', image: '/auto.png' },
      { id: 'light', label: 'Light', image: '/dos.png' },
      { id: 'dark', label: 'Dark', image: '/dark.png' },
    ].map((theme, i) => (
      <label key={i} className="cursor-pointer">
        <input
          type="radio"
          name="theme"
          value={theme.id}
          className="sr-only peer"
          defaultChecked={theme.id === 'light'}
        />
        <div className="relative border rounded-xl peer-checked:border-2 peer-checked:border-blue-600 transition overflow-hidden">
          {/* Imagen del tema */}
          <div className="w-full h-20 bg-gray-100 rounded-md overflow-hidden">
            <img
              src={theme.image}
              alt={theme.label}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Círculo con check en esquina inferior izquierda */}
          <div className="absolute bottom-1 left-1 w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center opacity-0 peer-checked:opacity-100 transition">
            ✓
          </div>
        </div>

        {/* Texto debajo */}
        <span className="block mt-2 text-sm peer-checked:text-blue-600">
          {theme.label}
        </span>
      </label>
    ))}
  </div>
</div>

        {/* Accent color */}
        <div className="grid grid-cols-2 items-center border-t border-gray-200 pt-6">
          <div>
            <label className="font-medium block">Accent color</label>
            <p className="text-sm text-gray-500">Pick your platform's main color</p>
          </div>
          <div className="flex justify-end space-x-3">
            {[
              'bg-red-400',
              'bg-yellow-400',
              'bg-green-300',
              'bg-blue-800',
              'bg-pink-400',
            ].map((color, i) => (
              <div
                key={i}
                className={`${color} w-6 h-6 rounded-full cursor-pointer hover:scale-110 transition`}
              />
            ))}
          </div>
        </div>

       {/* Toggles */}
<div className="space-y-4 border-t border-gray-200 pt-2">
  {[
    { label: 'Reduce motion', image: '/reduce.png'},
    { label: 'Auto play', image: '/play.png'},
    { label: 'High quality photo', image: '/photos.png', defaultChecked: false },
  ].map((item, i) => (
    <label key={i} className={`flex items-center justify-between pt-4 ${i > 0 ? 'border-t border-gray-200' : ''}`}>
      <div className="flex items-center space-x-3">
        <img src={item.image} alt={item.label} className="w-5 h-5" />
        <span>{item.label}</span>
      </div>
      <div className="relative inline-block w-11 h-6">
        <input
          type="checkbox"
          defaultChecked={item.defaultChecked}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-800 rounded-full transition-colors duration-300"></div>
        <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform duration-300"></div>
      </div>
    </label>
  ))}
</div>

        {/* Buttons */}
        <div className="flex justify-between border-t border-gray-200 pt-6">
          <button className="text-gray-500 hover:underline">Reset to default</button>
          <div className="space-x-2">
            <button className="px-4 py-2 border rounded-2xl border-gray-200 hover:bg-gray-100">Cancel</button>
            <button className="px-4 py-2 bg-blue-800 rounded-2xl text-white hover:bg-violet-700">Save Preferences
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
