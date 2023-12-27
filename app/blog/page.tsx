import './style.css';
const Blog = () => {
  return (
    <div className='blog'>
      <div className='blog-content'>
        <h1>Blog</h1>
        <div className='blog-text'>
          React Server Components (RSC) in App Router is a novel paradigm that
          eliminates much of the redundancy and potential risks linked with
          conventional methods. Given the newness, developers and subsequently
          security teams may find it challenging to align their existing
          security protocols with this model. This document is meant to
          highlight a few areas to look out for, what protections are built-in,
          and include a guide for auditing applications. We focus especially on
          the risks of accidental data exposure. Choosing Your Data Handling
          Model React Server Components blur the line between server and client.
          Data handling is paramount in understanding where information is
          processed and subsequently made available. The first thing we need to
          do is pick what data handling approach is appropriate for our project.
          HTTP APIs (recommended for existing large projects / orgs) Data Access
          Layer (recommended for new projects) Component Level Data Access
          (recommended for prototyping and learning) We recommend that you stick
          to one approach and dont mix and match too much. This makes it clear
          for both developers working in your code base and security auditors
          for what to expect. Exceptions pop out as suspicious. HTTP APIs If
          youre adopting Server Components in an existing project, the
          recommended approach is to handle Server Components at runtime as
          unsafe/untrusted by default like SSR or within the client. So there is
          no assumption of an internal network or zones of trust and engineers
          can apply the concept of Zero Trust. Instead, you only call custom API
          endpoints such as REST or GraphQL using fetch() from Server Components
          just like if it was executing on the client. Passing along any
          cookies. If you had existing getStaticProps/getServerSideProps
          connecting to a database, you might want to consolidate the model and
          move these to API end points as well so you have one way to do things.
          Look out for any access control that assumes fetches from the internal
          network are safe. This approach lets you keep existing organizational
          structures where existing backend teams, specialized in security can
          apply existing security practices. If those teams use languages other
          than JavaScript, that works well in this approach. It still takes
          advantage of many of the benefits of Server Components by sending less
          code to the client and inherent data waterfalls can execute with low
          latency.
        </div>
      </div>
    </div>
  );
};

export default Blog;
