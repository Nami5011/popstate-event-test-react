import { useEffect, useState } from 'react';

export default function SecondPage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      event.preventDefault();
      setShowModal(true);
    };

    // Push the current url to trigger popstate event on browser back button
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const confirmLeave = () => {
    setShowModal(false);
    history.back();
  };

  const cancel = () => {
    setShowModal(false);
    // Push state back to trigger popstate event until user confirms
    history.pushState(null, '', location.href);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Second Page (After)</h1>

      {showModal && (
        <div className="popup-position">
          <div className="popup">
            <p>Are you sure you want to go back?</p>
            <div className="popup-button-area">
              <button onClick={confirmLeave} style={{ marginRight: 10 }}>
                Go back
              </button>
              <button onClick={cancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
