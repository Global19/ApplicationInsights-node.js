// THIS FILE WAS AUTOGENERATED
import Base = require('./Base');
"use strict";
    
    /**
     * Data struct to contain both B and C sections.
     */
    class Data<TDomain> extends Base
    {
        
        /**
         * Name of item (B section) if any. If telemetry data is derived straight from this, this should be null.
         */
        public baseType: string;
        
        /**
         * Container for data item (B section).
         */
        public baseData: TDomain;
        
        constructor()
        {
            super();
            
        }
    }
export = Data;