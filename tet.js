
const html = (await (await fetch("tasks.sabantuy.cbsctf.live:45394/flag")).text()); // html as text
const doc = new DOMParser().parseFromString(html, 'text/html');
