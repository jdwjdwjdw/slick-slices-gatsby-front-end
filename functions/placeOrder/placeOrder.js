const nodemailer = require('nodemailer');

function generateOrderEmail({ order, total }) {
  return `
      <div>
        <h2>Your Recent Order for ${total}</h2>
        <p>Please start walking over, we will have your order ready in the next 20 mins.</p>
        <ul>
          ${order
            .map(
              (item) => `<li>
            <img src="${item.thumbnail}" alt="${item.name}" />
            ${item.size} ${item.name} - ${item.price}
          </li>`
            )
            .join('')}
        </ul>
        <p>Your total is <strong>${total}</strong> due at pickup.</p>
        <style>
            ul {
              list-style: none;
            }
        </style>
      </div> 
    `;
}
// create a transport for nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Useful function for adding a wait time to the handler. See commented out "await wait(5000)" in handler below
// function wait(ms = 0) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// }

exports.handler = async (event, context) => {
  // await wait(5000);
  const body = JSON.parse(event.body);
  // Check if they have filled out the honeypot
  if (body.mapleSyrup) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Boop beep bop zzzzst good bye... ERR 34234',
      }),
    };
  }
  // Validate the data coming in is correct
  const requiredFields = ['email', 'name', 'order'];

  for (const field of requiredFields) {
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! You are missing the ${field} field`,
        }),
      };
    }
  }

  // make sure they actually have items in the order
  if (!body.order.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Why would you order nothing?!`,
      }),
    };
  }
  // Send the email
  const info = await transporter.sendMail({
    from: 'Slick Slices <slick@example.com>',
    to: `${body.name} <${body.email}>,orders@example.com`,
    subject: 'New order!',
    html: generateOrderEmail({ order: body.order, total: body.total }),
  });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  };
};
