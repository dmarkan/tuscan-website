const date = new Date();
const year = date.getFullYear();

function Footer() {
    return (
    <footer class="footer py-3 my-4">
    <p class="mb-0 text-center text-muted"><img src="images/diamond.png" alt="" width="30" height="24" /> Tuscan © {year}</p>
  </footer>
    )
}

export default Footer;