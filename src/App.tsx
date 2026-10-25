/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ThreeCanvas from './components/ThreeCanvas';
import ControlDock from './components/ControlDock';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const { user, signIn, logout } = useAuth();

  return (
    <div className="w-full h-screen flex flex-col">
      <header className="flex items-center justify-between gap-8 px-6 py-4 border-b border-slate-200">
        <a href="/" className="text-lg font-bold tracking-tight text-slate-900">Aura3D</a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-slate-900">Gallery</a>
          <a href="#" className="hover:text-slate-900">Customize</a>
        </nav>
        {user ? (
            <button onClick={logout} className="px-4 py-2 text-xs font-medium text-slate-900 bg-slate-100 rounded-lg hover:bg-slate-200">Sign Out</button>
        ) : (
            <button onClick={signIn} className="px-4 py-2 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800">Sign In</button>
        )}
      </header>
      <main className="flex-grow w-full relative">
        <ThreeCanvas />
        <ControlDock />
      </main>
    </div>
  );
}
