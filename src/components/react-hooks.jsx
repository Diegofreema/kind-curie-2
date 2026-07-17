import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';

// useState, useEffect, useRef, useMemo, useCallback,

export const ReactHooks = () => {
  const [count, setCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [activeTabs, setActiveTabs] = useState('tab1');

  return (
    <div className="bg-white h-screen w-full text-black">
      <div>
        <h1>React Hooks</h1>

        <div className="flex space-x-3">
          <button onClick={() => setCount(count - 1)}>
            <Minus />
          </button>
          <h2>{count}</h2>
          <button onClick={() => setCount(count + 1)}>
            <Plus />
          </button>
        </div>
      </div>
      <div>
        <h2>Menu example</h2>
        <button
          className="border p-2 text-xs"
          onClick={() => setShowMenu(!showMenu)}
        >
          Toggle menu
        </button>
        {showMenu && <div>Menu is open</div>}
      </div>

      <div>
        <h2>Tabs</h2>
        <div className="flex space-x-3">
          <button
            className={`border p-2 text-xs ${
              activeTabs === 'tab1' ? 'bg-slate-600 text-white' : ''
            }`}
            onClick={() => setActiveTabs('tab1')}
          >
            Tab 1
          </button>
          <button
            className={`border p-2 text-xs ${
              activeTabs === 'tab2' ? 'bg-slate-600 text-white' : ''
            }`}
            onClick={() => setActiveTabs('tab2')}
          >
            Tab 2
          </button>
          <button
            className={`border p-2 text-xs ${
              activeTabs === 'tab3' ? 'bg-slate-600 text-white' : ''
            }`}
            onClick={() => setActiveTabs('tab3')}
          >
            Tab 3
          </button>
        </div>
        {activeTabs === 'tab1' && <div>Tab 1 content</div>}
        {activeTabs === 'tab2' && <div>Tab 2 content</div>}
        {activeTabs === 'tab3' && <div>Tab 3 content</div>}
      </div>
    </div>
  );
};
