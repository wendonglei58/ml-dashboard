cube(`Movies`, {
  sql: `SELECT * FROM public.movies`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, worldwideGross]
    }
  },
  
  dimensions: {
    year: {
      sql: `year`,
      type: `string`
    },
    
    genre: {
      sql: `genre`,
      type: `string`
    },
    
    lead: {
      sql: `lead`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    audienceScore: {
      sql: `audience_score`,
      type: `string`
    },
    
    profitability: {
      sql: `profitability`,
      type: `string`
    },
    
    worldwideGross: {
      sql: `worldwide_gross`,
      type: `string`
    },
    
    rottenTomatoesScore: {
      sql: `rotten_tomatoes_score`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
