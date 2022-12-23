const nodemailer = require('nodemailer')
const sendMail = (email) => {
  try {
    const transport = nodemailer.createTransport({
      mailer: 'gmail',
      auth: {
        user: 'super.im0203@gmail.com',
        pass: 'wrtonumwqzbbbbgi'
      }
    })
    return transport.sendMail({
      from: 'super.im0203@gmail.com',
      to: email,
      subject: 'OTP for email verification',
      html: `
        <div>
        <h2> Hi ${username}</h2>
        <br/>
        <h3> Hello from Express Project</h3>
        <br/>
        <p>Your OTP for Email verification is <b> ${otp} </b></p>
        <br/>
        <h4> Thank YOU! </h4>
        </div>
        `

    })
  } catch (error) {
    throw Error('otp not verified')
  }
}
