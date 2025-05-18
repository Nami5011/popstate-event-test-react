import { useNavigate } from 'react-router-dom';

export default function FirstPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h1>Top Page</h1>
      <button onClick={() => navigate('/before')} className="button-top">
        Go to the next page (Before)
      </button>
      <button onClick={() => navigate('/after')} className="button-top">
        Go to the next page (After)
      </button>
    </div>
  );
}
