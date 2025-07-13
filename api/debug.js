// 더 간단한 디버그 API
export default function handler(req, res) {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    
    return res.status(200).json({ 
      message: 'Debug API working',
      timestamp: new Date().toISOString(),
      method: req.method,
      url: req.url,
      env: {
        nodeEnv: process.env.NODE_ENV,
        hasSupabaseUrl: !!process.env.SUPABASE_URL,
        hasSupabaseKey: !!process.env.SUPABASE_ANON_KEY
      }
    });
  } catch (error) {
    return res.status(500).json({ 
      error: 'Debug API failed',
      message: error.message,
      stack: error.stack
    });
  }
}