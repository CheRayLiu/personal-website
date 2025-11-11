const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Ray Liu
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
      `}</style>
    </footer>
  ),
  navs: [],
};
