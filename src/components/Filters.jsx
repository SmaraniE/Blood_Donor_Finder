import { Droplet, Search, ShieldCheck } from 'lucide-react';

export default function Filters({ 
  bloodGroups, 
  selectedBloodGroup, 
  setSelectedBloodGroup, 
  searchCity, 
  setSearchCity, 
  sortByAvailability, 
  setSortByAvailability 
}) {
  return (
    <div className="filters-container">
      <div className="filter-group">
        <label htmlFor="bloodGroup"><Droplet size={16} /> Blood Group</label>
        <select 
          id="bloodGroup" 
          className="styled-select"
          value={selectedBloodGroup}
          onChange={(e) => setSelectedBloodGroup(e.target.value)}
        >
          <option value="">All Blood Groups</option>
          {bloodGroups.map(bg => (
            <option key={bg} value={bg}>{bg}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="citySearch"><Search size={16} /> Search City</label>
        <input 
          type="text" 
          id="citySearch" 
          className="styled-input" 
          placeholder="e.g. Gwenborough"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
      </div>

      <div className="filter-group" style={{flex: '0.5', minWidth: '150px'}}>
        <label htmlFor="sortAvailability"><ShieldCheck size={16} /> Sort by</label>
        <select 
          id="sortAvailability" 
          className="styled-select"
          value={sortByAvailability.toString()}
          onChange={(e) => setSortByAvailability(e.target.value === 'true')}
        >
          <option value="false">Default</option>
          <option value="true">Available First</option>
        </select>
      </div>
    </div>
  );
}
