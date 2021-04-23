cube(`Files`, {
  sql: `SELECT * FROM public.files`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [fileName, createdAt]
    }
  },
  
  dimensions: {
    fileName: {
      sql: `file_name`,
      type: `string`
    },
    
    fileType: {
      sql: `file_type`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
