// Environment
const isProduction = process.env.NODE_ENV === 'production';

export default function html({ title }) {
  let path = '/';
  let link = '';

  if (isProduction) {
    path = '/app/';
    link = `<link rel="stylesheet" href="${path}css/main.css" />`;
  }

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"> <title>${title}</title> ${link}
        <link href="https://fonts.googleapis.com/css?family=Quicksand|Roboto" rel="stylesheet">
        <script src="https://kit.fontawesome.com/b2ef589fcd.js"></script>
      </head>

      <body>
        <div id="root"></div>
        <script src="${path}vendor.js"></script>
        <script src="${path}main.js"></script>
      </body>
    </html>
  `;
}
