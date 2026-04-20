import { MapPin, ShieldCheck, Heart } from 'lucide-react';

export default function DonorCard({ donor, requestStatus, handleRequest }) {
  return (
    <div className="donor-card">
      <div className="donor-header">
        <div className="donor-info">
          <h3>{donor.name}</h3>
          <div className="location">
            <MapPin size={14} /> {donor.address.city}
          </div>
        </div>
        <div className="blood-badge">
          {donor.bloodGroup}
        </div>
      </div>
      
      <div className="availability-wrapper">
        <span className={`availability ${donor.isAvailable ? 'available' : 'unavailable'}`}>
          {donor.isAvailable ? '● Available to donate' : '○ Currently unavailable'}
        </span>
      </div>

      <button 
        className={`btn-request ${requestStatus[donor.id] ? 'btn-success' : 'btn-primary'}`}
        disabled={!donor.isAvailable || requestStatus[donor.id]}
        onClick={() => handleRequest(donor.id)}
      >
        {requestStatus[donor.id] ? (
          <><span>Request Sent</span> <ShieldCheck size={18} /></>
        ) : (
          <><span>Request Help</span> <Heart size={18} /></>
        )}
      </button>
    </div>
  );
}
