import { Heart } from 'lucide-react';
import DonorCard from './DonorCard';

export default function DonorList({ loading, error, donors, requestStatus, handleRequest }) {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading donors data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="empty-state">
        <h3>Oops! Something went wrong.</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (donors.length === 0) {
    return (
      <div className="empty-state">
        <Heart size={48} />
        <h3>No donors found</h3>
        <p>Try adjusting your filters or searching for a different city.</p>
      </div>
    );
  }

  return (
    <div className="donors-grid">
      {donors.map(donor => (
        <DonorCard 
          key={donor.id} 
          donor={donor} 
          requestStatus={requestStatus} 
          handleRequest={handleRequest} 
        />
      ))}
    </div>
  );
}
