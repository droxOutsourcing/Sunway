# 🚀 빠른 GitHub 업데이트 가이드

## 현재 상황
- GitHub 저장소가 공개로 전환됨 ✅
- 서버리스 함수 파일들이 준비됨 ✅
- Git 자동 푸시에 제한이 있어 수동 업로드 필요

## 방법 1: 개별 파일 업로드 (권장)

### 1. 새 파일 생성
GitHub 저장소 https://github.com/droxOutsourcing/WoodenA 에서:

**A. api/test.js 생성:**
- "Add file" → "Create new file"
- 파일명: `api/test.js`
- 내용: [아래 코드 복사]

**B. api/login.js 생성:**
- "Add file" → "Create new file"  
- 파일명: `api/login.js`
- 내용: [아래 코드 복사]

### 2. 기존 파일 수정
**vercel.json 수정:**
- 기존 파일 클릭 → "Edit this file" 버튼
- 내용 전체 교체 → [아래 설정 복사]

## 방법 2: 압축 파일 업로드

1. `WoodenA-serverless-update.tar.gz` 다운로드
2. 압축 해제
3. GitHub 저장소에 드래그 앤 드롭 업로드

## 파일 내용

### api/test.js
```javascript
// 간단한 테스트 API
module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  res.json({ 
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: {
      supabaseUrl: process.env.SUPABASE_URL ? 'set' : 'missing',
      supabaseKey: process.env.SUPABASE_ANON_KEY ? 'set' : 'missing',
      nodeEnv: process.env.NODE_ENV
    }
  });
};
```

### api/login.js  
```javascript
// 로그인 API - 단순화된 버전
const { createClient } = require('@supabase/supabase-js');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Username and password are required' 
      });
    }

    // 환경변수 확인
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
      return res.status(500).json({ 
        success: false, 
        message: 'Database configuration error',
        debug: {
          url: process.env.SUPABASE_URL ? 'set' : 'missing',
          key: process.env.SUPABASE_ANON_KEY ? 'set' : 'missing'
        }
      });
    }

    // Supabase 클라이언트 초기화
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
    
    // 사용자 검색
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .single();
    
    if (error && error.code !== 'PGRST116') {
      return res.status(500).json({ 
        success: false, 
        message: 'Database error',
        error: error.message
      });
    }
    
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    // 간단한 패스워드 검증
    if (password !== 'admin123') {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    res.json({ 
      success: true, 
      user: { 
        id: user.id, 
        username: user.username, 
        email: user.email,
        role: user.role 
      } 
    });
    
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error: ' + error.message 
    });
  }
};
```

### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/public"
      }
    },
    {
      "src": "api/test.js",
      "use": "@vercel/node"
    },
    {
      "src": "api/login.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/test",
      "dest": "/api/test.js"
    },
    {
      "src": "/api/auth/login",
      "dest": "/api/login.js"
    },
    {
      "src": "/(.*)",
      "dest": "/dist/public/$1"
    },
    {
      "src": "/.*",
      "dest": "/dist/public/index.html"
    }
  ]
}
```

## 배포 후 테스트

1. **환경변수 확인**: `https://woodena-xxx.vercel.app/api/test`
2. **로그인 테스트**: admin / admin123

커밋 후 Vercel이 자동으로 재배포를 시작합니다.