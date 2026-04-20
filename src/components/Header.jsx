import { Droplet, Users } from 'lucide-react';

export default function Header({ loading, error, filteredAvailableCount }) {
  return (
    <header className="header">
      <h1><Droplet color="var(--primary)" size={36} fill="var(--primary)" /> Blood Donors Connect</h1>
      <p>Find and connect with blood donors in your city to save lives.</p>
      {!loading && !error && (
        <div className="stats-card">
          <Users size={18} /> Available Donors <span className="count">{filteredAvailableCount}</span>
        </div>
      )}
    </header>
  );
}
