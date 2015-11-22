var React = require('react');

import ChartFinderSidebar from './ChartFinderSidebar.jsx'

var AppContainer = React.createClass({
   render: function() {
       return (
           <div className="chart-finder">
               <h1>Chart-Finder</h1>
               <div className="row">
                   <ChartFinderSidebar/>
                   <div className="chart-finder-slides"></div>
               </div>
           </div>
       )
   }
});

export default AppContainer;