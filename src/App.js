import React from 'react';
import "remixicon/fonts/remixicon.css";
import './App.css';

function App() {

  return (
    <main className="App">
        <header className="App-header">
          <a href="https://www.aytacmalkoc.com.tr/blog" className="red" target="_blank">blog</a>
        </header>
        <section>
            <h1> <span><i class="ri-terminal-line color-cycle"></i></span> Merhaba, ben Aytac Malkoc. </h1>
            <h2> HTML5, CSS, JavaScript, VueJS, PHP, Laravel</h2>
            <p> Web Developer'ım; Bir çok kurumsal projede rol aldım. Ayrıca geliştirmekte olduğum projelerim de bulunmakta.</p>
            <p> Benimle çalışmak isterseniz <a href="mailto:iletisim@aytacmalkoc.com.tr" className="red">iletisim@aytacmalkoc.com.tr</a>
                adresine mail atarak bana ulaşabilirsiniz. </p>
            <p> Çalışmalarım haricinde hobi olarak bisiklet sürmekten ve futbol oynamaktan hoşlanıyorum. </p>
            <div className="social">
                <a href="https://github.com/aytacmalkoc" target="_blank" rel="noopener noreferrer"
                    title = "github.com/aytacmalkoc" >
                    <i class="ri-github-fill"></i>
                </a>
                < a href = "https://twitter.com/jrd_aytacmalkoc"
                target = "_blank"
                rel = "noopener noreferrer"
                    title = "twitter.com/jrd_aytacmalkoc" >
                    <i class="ri-twitter-fill twitter"></i>
                </a>
                <a href="https://instagram.com/aytacmalkoc35" target="_blank" rel="noopener noreferrer"
                    title = "instagram.com/aytacmalkoc35" >
                    <i class="ri-instagram-line instagram"></i>
                </a>
                <a href="https://medium.com/@aytacmalkoc" target="_blank" rel="noopener noreferrer"
                    title = "medium.com/aytacmalkoc" >
                    <i class="ri-medium-fill medium"></i>
                </a>
                < a href = "https://linkedin.com/in/aytacmalkoc"
                target = "_blank"
                rel = "noopener noreferrer"
                    title = "linkedin.com/aytacmalkoc" >
                    <i class="ri-linkedin-box-fill linkedin"></i>
                </a>
            </div>
        </section>
    </main>
  );
}

export default App;
