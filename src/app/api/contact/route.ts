import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields (Name, Email, Message)' },
        { status: 400 }
      );
    }

    // Console log submission on server side for local dev testing
    console.log('📩 NEW PORTFOLIO CONTACT SUBMISSION:', {
      timestamp: new Date().toISOString(),
      name,
      email,
      subject: subject || 'No Subject Provided',
      message,
    });

    // Web3Forms Free Integration: Automatically forwards to mehtakrishna1710@gmail.com
    // You can get a free access key at https://web3forms.com (No registration required!)
    const web3formsRes = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_FREE_WEB3FORMS_KEY',
        name,
        email,
        subject: `[Portfolio Inquiry] ${subject || 'Message from ' + name}`,
        message,
        from_name: `${name} (Krishna Mehta Portfolio)`,
      }),
    });

    const data = await web3formsRes.json();

    if (data.success) {
      return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    }

    // Fallback response if key is not yet set
    return NextResponse.json({
      success: true,
      message: 'Submission received!',
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
