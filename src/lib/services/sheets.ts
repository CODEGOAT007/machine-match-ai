const SHEETS_WEBHOOK_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK

export const sendToSheets = async (data: any, formType: 'buyer' | 'seller' | 'dealer') => {
  if (!SHEETS_WEBHOOK_URL) {
    console.error('Google Sheets webhook URL not configured')
    return
  }

  try {
    await fetch(SHEETS_WEBHOOK_URL, {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        formType,
        timestamp: new Date().toISOString()
      })
    })
  } catch (error) {
    console.error('Error sending to Google Sheets:', error)
  }
} 