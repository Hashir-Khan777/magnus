import "./css/index.css";
import { Banner, Contact } from "../../components";
import {
  FaBuilding,
  FaChartLine,
  FaChartBar,
  FaArrowRight,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="main">
      <Banner />
      <section className="feature_section">
        <div className="container">
          <h1 className="feature_section_heading">Our Features</h1>
          <div className="cards">
            <div className="card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                fill="#ffffff"
                width="100px"
                viewBox="0 0 512.001 512.001"
                xml="preserve"
              >
                <g>
                  <g>
                    <path d="M430.827,86.605c-49.161-51.53-124.712-59.44-180.6-28.393c-4.829,2.682-6.568,8.772-3.886,13.6    c2.682,4.83,8.772,6.567,13.6,3.886c51.118-28.401,115.436-18.236,156.371,24.671c42.236,44.811,46.992,111.607,14.317,161.128    c-45.008,68.362-142.217,78.664-200.5,20.37c-39.273-39.259-50.651-102.572-22.282-154.093c2.662-4.84,0.897-10.922-3.942-13.584    c-4.839-2.66-10.92-0.897-13.584,3.942c-0.613,1.115-1.703,3.193-2.754,5.324h0.001c-29.088,59.294-15.854,128.301,28.418,172.556    c67.148,67.162,179.31,55.53,231.345-23.507C484.648,215.946,480.07,138.85,430.827,86.605z"></path>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M456.438,55.562c-74.091-74.081-194.651-74.084-268.745,0.001c-66.628,66.638-73.801,171.115-19.542,245.856    l-31.167,31.16c-10.927-5.23-24.745-3.542-34.155,5.869L14.667,426.62c-19.547,19.534-19.563,51.168-0.005,70.713    c19.539,19.552,51.172,19.56,70.715,0.002l88.175-88.164c9.406-9.408,11.1-23.226,5.868-34.154l31.163-31.17    c74.758,54.271,179.227,47.079,245.855-19.54C530.522,250.214,530.522,129.656,456.438,55.562z M159.407,395.027L71.23,483.193    c-11.719,11.728-30.689,11.739-42.424-0.005c-11.73-11.721-11.737-30.691,0.002-42.422l88.164-88.174    c3.897-3.898,10.242-3.9,14.139,0l28.295,28.295C163.306,384.785,163.306,391.129,159.407,395.027z M166.479,359.67    l-14.148-14.148l28.481-28.474c2.234,2.479,4.529,4.909,6.88,7.259c2.351,2.351,4.78,4.647,7.261,6.882L166.479,359.67z     M442.293,310.163c-66.277,66.267-173.635,66.831-240.458,0c-66.743-66.736-66.346-174.099,0-240.456    c66.289-66.28,174.158-66.291,240.457,0C508.577,136.001,508.577,243.87,442.293,310.163z"></path>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M230.37,84.108c-0.07-0.09-0.15-0.17-0.24-0.26c-3.911-3.901-10.242-3.901-14.152,0c-3.901,3.911-3.901,10.242,0,14.152    c0.09,0.09,0.17,0.17,0.26,0.25c3.931,3.651,10.072,3.561,13.892-0.25C233.94,94.179,234.03,88.038,230.37,84.108z"></path>
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <h3>Clarity</h3>
              <p>
                As software developers, we completely understand the importance
                of clarity. We believe that clarity is the key to a successful
                project. We are here to help you achieve that. You can easily
                convey your message to your audience with clarity.
              </p>
            </div>
            <div className="card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100px"
                fill="#ffffff"
                viewBox="-4 0 511 511.99964"
              >
                <path d="m498.429688 219.339844c-5.308594-8.015625-13.355469-13.539063-22.710938-15.632813 6.035156-11.542969 5.789062-25.945312-1.898438-37.550781-5.46875-8.261719-13.71875-13.597656-22.699218-15.617188 1.601562-3.054687 2.785156-6.351562 3.492187-9.828124 1.960938-9.667969.046875-19.519532-5.402343-27.742188-5.308594-8.019531-13.355469-13.542969-22.710938-15.632812 6.035156-11.542969 5.789062-25.945313-1.898438-37.554688-11.238281-16.972656-34.199218-21.640625-51.175781-10.398438l-36.757812 24.34375c-19.59375-9.9375-40.433594-16.988281-62.0625-21.003906-6.835938-10.378906-14.785157-20.027344-23.683594-28.652344l-15.207031-14.738281c-11.136719-10.796875-28.601563-12.417969-41.53125-3.851562-15.296875 10.128906-19.5 30.816406-9.371094 46.113281.398438.605469.789062 1.214844 1.175781 1.824219-49.847656 10.085937-95.277343 36.539062-128.902343 75.300781-36.488282 42.066406-56.585938 95.941406-56.585938 151.699219 0 10.6875.730469 21.394531 2.175781 31.816406 11.136719 81.019531 65.105469 150.839844 140.839844 182.21875 28.085937 11.640625 57.886719 17.546875 88.5625 17.546875 48.582031 0 95.085937-14.878906 134.488281-43.023438 38.546875-27.539062 67.386719-65.542968 83.40625-109.902343 1.496094-4.132813-.648437-8.699219-4.78125-10.191407-4.136718-1.492187-8.699218.648438-10.191406 4.785157-14.917969 41.308593-41.78125 76.699219-77.691406 102.351562-36.683594 26.207031-79.988282 40.058594-125.230469 40.058594-23.390625 0-46.230469-3.691406-68.089844-10.972656l64.773438-42.894531c.003906-.003907.007812-.003907.011719-.007813.003906 0 .003906-.003906.007812-.007813l53.832031-35.648437h.003907c4.832031-3.203125 8.132812-8.09375 9.289062-13.777344 1.15625-5.683593.03125-11.480469-3.171875-16.3125l-.710937-1.078125 10.457031-6.925781c7.460937-4.941406 16.433593-6.878906 25.269531-5.460937 12.792969 2.054687 25.785156-.757813 36.582031-7.910157l86.734375-57.4375c-.59375 7.523438-1.570312 15.003907-2.933594 22.359375-.804687 4.324219 2.050782 8.480469 6.375 9.28125.488282.09375.980469.136719 1.460938.136719 3.761719 0 7.105469-2.679687 7.816406-6.511719 2.207032-11.871094 3.476563-24.03125 3.804688-36.207031l24.441406-16.1875c8.222656-5.445313 13.835938-13.769531 15.796875-23.433594 1.964844-9.667969.046875-19.519531-5.398437-27.742187zm-177.21875-135.378906-24.324219 16.109374-4.789063-12.902343c-2-5.382813-4.292968-10.660157-6.832031-15.824219 12.339844 3.128906 24.355469 7.347656 35.945313 12.617188zm-252.097657 55.191406c32.316407-37.253906 76.335938-62.296875 124.492188-70.980469 7.726562 18.71875 9.578125 39.632813 4.960937 59.566406l-19.410156 83.855469c-3.050781-3.257812-7.011719-5.503906-11.472656-6.410156-5.6875-1.160156-11.480469-.03125-16.3125 3.171875l-54.980469 36.40625c-.003906 0-.003906 0-.007813.003906 0 0-.003906 0-.003906.003906l-79.296875 52.511719c-.433593-5.59375-.660156-11.230469-.660156-16.863281 0-51.921875 18.714844-102.09375 52.691406-141.265625zm207.191407 250.441406c-.308594 1.515625-1.191407 2.824219-2.484376 3.679688h.003907l-47.28125 31.308593-87.753907-130.871093c-2.449218-3.652344-7.394531-4.625-11.046874-2.175782-3.648438 2.449219-4.625 7.390625-2.175782 11.042969l87.699219 130.796875-67.496094 44.699219c-67.070312-29.335938-115.066406-91.289063-126.605469-163.378907l79.390626-52.402343 9.136718 13.632812c1.539063 2.289063 4.054688 3.527344 6.621094 3.527344 1.523438 0 3.066406-.433594 4.425781-1.347656 3.652344-2.449219 4.628907-7.394531 2.179688-11.046875l-9.074219-13.535156 48.320312-31.894532c1.285157-.855468 2.828126-1.152344 4.34375-.84375 1.515626.308594 2.824219 1.191406 3.679688 2.480469l107.273438 161.984375c.851562 1.285156 1.152343 2.828125.84375 4.34375zm211.921874-145.683594c-1.117187 5.5-4.308593 10.234375-8.988281 13.332032l-27.941406 18.503906c-.007813.003906-.015625.011718-.027344.015625l-99.730469 66.046875c-7.460937 4.941406-16.433593 6.882812-25.269531 5.460937-12.789062-2.050781-25.78125.757813-36.582031 7.910157l-10.457031 6.925781-87.859375-132.667969 22.710937-98.105469c5.847657-25.273437 2.765625-51.894531-8.375-75.085937-.101562-.242188-.210937-.476563-.335937-.707032-2.140625-4.382812-4.570313-8.636718-7.285156-12.738281-5.28125-7.976562-3.089844-18.761719 4.890624-24.046875 6.742188-4.464844 15.851563-3.621094 21.65625 2.007813l15.207032 14.742187c16.449218 15.949219 29.359375 35.730469 37.328125 57.207032l8.28125 22.308593c.015625.042969.03125.078125.046875.117188.019531.050781.042968.105469.0625.15625.058594.136719.113281.261719.171875.367187.160156.335938.335937.667969.546875.984375 2.429687 3.667969 7.367187 4.671875 11.03125 2.242188l84.910156-56.226563c9.65625-6.394531 22.714844-3.742187 29.109375 5.914063s3.742187 22.714843-5.914063 29.109375l-7.371093 4.882812s-.003907 0-.007813.003906l-16.441406 10.890626c-.023438.015624-.039062.03125-.0625.042968-.09375.066406-.183594.128906-.257812.191406-3.398438 2.496094-4.277344 7.242188-1.921876 10.796876 2.425782 3.667968 7.367188 4.671874 11.035157 2.242187l16.453125-10.898437c4.675781-3.089844 10.273437-4.179688 15.769531-3.0625 5.496094 1.117187 10.234375 4.308593 13.328125 8.988281 3.097656 4.675781 4.191406 10.28125 3.074219 15.777343-1.117188 5.5-4.308594 10.234376-8.988281 13.332032l-23.820313 15.777344c-3.667969 2.425781-4.671875 7.363281-2.242187 11.03125 1.53125 2.3125 4.0625 3.566406 6.644531 3.566406 1.507812 0 3.035156-.429688 4.386719-1.324219l3.6875-2.441406 12.757812-8.449219c9.660156-6.394531 22.714844-3.742188 29.109375 5.914062 6.394531 9.660157 3.742187 22.714844-5.914063 29.113282l-11.898437 7.878906c-.0625.039062-.125.082031-.1875.125l-11.734375 7.769531c-3.667969 2.425781-4.671875 7.367188-2.242188 11.035157 1.53125 2.3125 4.0625 3.566406 6.644532 3.566406 1.507812 0 3.035156-.429688 4.386718-1.324219l3.6875-2.441406s0-.003907.003907-.003907l12.757812-8.445312c4.675781-3.097656 10.277344-4.191406 15.777344-3.070312 5.5 1.113281 10.234375 4.308593 13.332031 8.984374 3.09375 4.675782 4.183594 10.28125 3.066406 15.777344zm0 0"></path>
              </svg>
              <h3>Attractive</h3>
              <p>
                As software developers, we make sure that our products are
                attractive and easy to use. We believe that if there is no
                attraction, there is no use. Atrractive Mobile apps can also be
                a great way to boost loyalty among your customers.
              </p>
            </div>
            <div className="card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                width="100px"
                fill="#ffffff"
                enableBackground="new 0 0 512.045 512.045"
                viewBox="0 0 512.045 512.045"
              >
                <g>
                  <path d="m270.989 257.235v-19.45h4.581c24.052 0 43.619-19.567 43.619-43.619s-19.567-43.619-43.619-43.619h-31.455c-6.896 0-12.505-5.609-12.505-12.505s5.61-12.506 12.505-12.506h53.106v-30h-26.232v-19.45h-30v19.577c-21.982 1.607-39.379 19.994-39.379 42.379 0 23.438 19.068 42.505 42.505 42.505h31.455c7.51 0 13.619 6.109 13.619 13.619s-6.109 13.619-13.619 13.619h-67.78v30h33.199v19.45z"></path>
                  <path d="m422.683 166.661c0-91.897-74.764-166.661-166.661-166.661-91.896 0-166.66 74.764-166.66 166.661 0 75.973 51.1 140.232 120.733 160.222v58.188h-53.493l99.409 126.975 99.408-126.975h-53.492v-58.181c69.645-19.983 120.756-84.248 120.756-160.229zm-303.321 0c0-75.355 61.306-136.661 136.66-136.661 75.355 0 136.661 61.306 136.661 136.661 0 75.354-61.306 136.66-136.661 136.66-75.354 0-136.66-61.305-136.66-136.66zm174.47 248.409-37.821 48.309-37.821-48.309h21.905v-82.514c5.244.5 10.555.765 15.927.765 5.365 0 10.668-.265 15.904-.763v82.512z"></path>
                </g>
              </svg>
              <h3>Low-Cost</h3>
              <p>
                Our products are designed to be low-cost and highly
                customizable. We believe that the best software is the one that
                is easy to use, attractive and low-cost. We ensure that we gives
                you a high performance product at a very affordable price.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about_section">
        <div className="container">
          <div className="about">
            <div className="about_image">
              <img src="./images/about.jpg" alt="" />
            </div>
            <div className="about_content">
              <h1 className="about_contant_heading">Why We Are Different?</h1>
              <div className="about_sub_content">
                <div className="about_sub_content_icon">
                  <FaBuilding />
                </div>
                <div className="about_sub_content_para">
                  <h3>Our Company</h3>
                  <p>
                    We are a digital media house thinks Like A Machine Brain. To
                    Grow Your Business. We aim to grow your business.
                  </p>
                </div>
              </div>
              <div className="about_sub_content">
                <div className="about_sub_content_icon">
                  <FaChartLine />
                </div>
                <div className="about_sub_content_para">
                  <h3>Our Success Mission</h3>
                  <p>
                    We aim to make business easy for you and to make your
                    business more efficient and profitable.
                  </p>
                </div>
              </div>
              <div className="about_sub_content">
                <div className="about_sub_content_icon">
                  <FaChartBar />
                </div>
                <div className="about_sub_content_para">
                  <h3>Our Future Plan</h3>
                  <p>
                    Our future plan is to bring your business on the second step
                    of success and make people talk about your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services_section">
        <div className="container">
          <h1 className="feature_section_heading">Our Services</h1>
          <div className="services">
            <div className="service">
              <svg
                viewBox="0 0 64 64"
                width="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="media-monitor-screen-Digital_Marketing"
                  data-name="media-monitor-screen-Digital Marketing"
                >
                  <path d="m59 15h-2v-1h1a3 3 0 0 0 0-6h-1v-5a.968.968 0 0 0 -.41-.8.991.991 0 0 0 -.88-.16l-12.86 3.96h-6.85a1 1 0 0 0 -1 1v1h-2a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h2v1h-6v-9a1 1 0 0 0 -1-1h-20a1 1 0 0 0 -1 1v9h-2a3.009 3.009 0 0 0 -3 3v32a3.009 3.009 0 0 0 3 3h23v3h-6a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1h-6v-3h23a3.009 3.009 0 0 0 3-3v-32a3.009 3.009 0 0 0 -3-3zm-2-5h1a1 1 0 0 1 0 2h-1zm-13-2.26 11-3.39v13.3l-11-3.39zm-7 .26h5v6h-5zm2.85 8-.72 5h-1.13v-5zm-5.85-4v-2h1v2zm-25-5h18v14h-18zm32 51v2h-18v-2zm-11-2v-3h4v3zm30-6a1 1 0 0 1 -1 1h-54a1 1 0 0 1 -1-1v-1h56zm0-3h-56v-29a1 1 0 0 1 1-1h2v5a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-5h7v5a1 1 0 0 0 1 1h3a1 1 0 0 0 .99-.86l.88-6.14h.98l12.86 3.96a.925.925 0 0 0 .29.04 1.015 1.015 0 0 0 1-1v-2h2a1 1 0 0 1 1 1z"></path>
                  <path d="m7 45h26a1 1 0 0 0 1-1v-16a1 1 0 0 0 -1-1h-26a1 1 0 0 0 -1 1v16a1 1 0 0 0 1 1zm1-2v-13.211l11.476 7.063a1 1 0 0 0 1.048 0l11.476-7.063v13.211zm2.533-14h18.934l-9.467 5.826z"></path>
                  <path d="m37 39h2v3a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-12a1 1 0 0 0 -1-1h-1v-3a1 1 0 0 0 -1-1h-18a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1zm19 2h-15v-10h15zm-18-14h16v2h-14a1 1 0 0 0 -1 1v7h-1z"></path>
                  <path d="m43 33h2v2h-2z"></path>
                  <path d="m47 33h7v2h-7z"></path>
                  <path d="m43 37h4v2h-4z"></path>
                  <path d="m49 37h5v2h-5z"></path>
                  <path d="m15.474 17.851a1 1 0 0 0 .973.044l6-3a1 1 0 0 0 0-1.79l-6-3a1 1 0 0 0 -1.447.895v6a1 1 0 0 0 .474.851zm1.526-5.233 2.764 1.382-2.764 1.382z"></path>
                </g>
              </svg>
              <h2>Digital Marketing</h2>
              <p>
                The need to have an online presence for any company is extremely
                fundamental.
              </p>
              <button className="read_more">
                <span>Read More</span> <FaArrowRight />
              </button>
            </div>
            <div className="service">
              <svg
                id="Capa_1"
                enableBackground="new 0 0 512 512"
                viewBox="0 0 512 512"
                width="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m15 420h166v62h-45c-8.284 0-15 6.716-15 15s6.716 15 15 15h240c8.284 0 15-6.716 15-15s-6.716-15-15-15h-45v-62h166c8.284 0 15-6.716 15-15v-330c0-8.284-6.716-15-15-15h-45v-45c0-8.284-6.716-15-15-15h-362c-8.284 0-15 6.716-15 15v45h-45c-8.284 0-15 6.716-15 15v330c0 8.284 6.716 15 15 15zm286 62h-90v-62h90zm-211-452h332v90h-332zm0 120h332v180h-332zm-60-60h30v255c0 8.284 6.716 15 15 15h362c8.284 0 15-6.716 15-15v-255h30v300h-452z"></path>
                  <circle cx="136" cy="75" r="15"></circle>
                  <circle cx="196" cy="75" r="15"></circle>
                  <circle cx="256" cy="75" r="15"></circle>
                  <path d="m367.213 255 19.393-19.393c7.869-7.869 4.713-21.312-5.863-24.837l-90-30c-5.389-1.797-11.333-.394-15.35 3.624-4.018 4.018-5.421 9.96-3.624 15.35l30 90c2.049 6.143 7.796 10.256 14.231 10.256 3.932 0 7.761-1.548 10.606-4.394l19.394-19.393 19.394 19.394c2.928 2.928 6.767 4.393 10.606 4.393s7.678-1.465 10.606-4.393c5.858-5.858 5.858-15.355 0-21.213zm-44.657 2.231-12.839-38.514 38.515 12.838z"></path>
                  <path d="m226 180h-90c-8.284 0-15 6.716-15 15s6.716 15 15 15h90c8.284 0 15-6.716 15-15s-6.716-15-15-15z"></path>
                  <path d="m226 240h-90c-8.284 0-15 6.716-15 15s6.716 15 15 15h90c8.284 0 15-6.716 15-15s-6.716-15-15-15z"></path>
                </g>
              </svg>
              <h2>Website development</h2>
              <p>
                Web design is one of the essential things we consider in our
                design lab.
              </p>
              <button className="read_more">
                <span>Read More</span> <FaArrowRight />
              </button>
            </div>
            <div className="service">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="M472,56H40A32.042,32.042,0,0,0,8,88V360a32.042,32.042,0,0,0,32,32H204.9l-10.67,32H168a8,8,0,0,0-8,8v16H88a8,8,0,0,0,0,16H440a8,8,0,0,0,0-16H352V432a8,8,0,0,0-8-8H317.77L307.1,392H472a32.042,32.042,0,0,0,32-32V88A32.042,32.042,0,0,0,472,56ZM336,440v8H176v-8ZM211.1,424l10.67-32h68.46l10.67,32ZM488,360a16.021,16.021,0,0,1-16,16H40a16.021,16.021,0,0,1-16-16V344H488ZM143.66,256l-3,72h-9.32l-3-72Zm-14.22-16,5.34-32h2.44l5.34,32ZM136,192c-8.67,0-16-10.99-16-24,0-8.21,8.38-20.14,15.98-28.55C142.83,147.05,152,159.2,152,168,152,181.01,144.67,192,136,192Zm87.06-16,.94,1.89V184H192v-6.11l.94-1.89Zm-22.12-16L208,145.89,215.06,160ZM224,200V327a8.258,8.258,0,0,0,.07,1H191.93a8.258,8.258,0,0,0,.07-1V200Zm72-32h24v16h-8a8,8,0,0,0,0,16h8v16H296a8,8,0,0,0,0,16h24v16h-8a8,8,0,0,0,0,16h8v16H296a8,8,0,0,0,0,16h24v32H264V136h56v16H296a8,8,0,0,0,0,16Zm96,96v63a8.258,8.258,0,0,0,.07,1H359.93a8.258,8.258,0,0,0,.07-1V264Zm-32-16v-6.11l16-32,16,32V248Zm128,80H407.93a8.258,8.258,0,0,0,.07-1V240a8.081,8.081,0,0,0-.84-3.58l-24-48a8.009,8.009,0,0,0-14.32,0l-24,48A8.081,8.081,0,0,0,344,240v87a8.258,8.258,0,0,0,.07,1H336V128a8,8,0,0,0-8-8H256a8,8,0,0,0-8,8V328h-8.07a8.258,8.258,0,0,0,.07-1V176a8.081,8.081,0,0,0-.84-3.58l-24-48a8.009,8.009,0,0,0-14.32,0l-24,48A8.081,8.081,0,0,0,176,176V327a8.258,8.258,0,0,0,.07,1h-19.4l3.32-79.67c.01-.18,0-.36,0-.55v-.24a8.013,8.013,0,0,0-.1-.84v-.02l-7.4-44.41C161.78,195.26,168,182.52,168,168c0-20.56-23.83-43.33-26.55-45.86a8.017,8.017,0,0,0-10.9,0C127.83,124.67,104,147.44,104,168c0,14.52,6.22,27.26,15.51,34.27l-7.4,44.41v.02a8.013,8.013,0,0,0-.1.84v.24c0,.19-.01.37,0,.55L115.33,328H24V88A16.021,16.021,0,0,1,40,72H472a16.021,16.021,0,0,1,16,16Z"></path>
                  <path d="M96,352H48a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16Z"></path>
                  <path d="M128,352h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path>
                  <path d="M208,208a8,8,0,0,0-8,8v88a8,8,0,0,0,16,0V216A8,8,0,0,0,208,208Z"></path>
                  <path d="M376,272a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V280A8,8,0,0,0,376,272Z"></path>
                  <path d="M48,104h64a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Z"></path>
                  <path d="M48,128H64a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Z"></path>
                  <path d="M432,312h32a8,8,0,0,0,0-16H432a8,8,0,0,0,0,16Z"></path>
                  <path d="M456,288h8a8,8,0,0,0,0-16h-8a8,8,0,0,0,0,16Z"></path>
                </g>
              </svg>
              <h2>Graphic Designing</h2>
              <p>
                We're of the opinion to provide you with our online graphic
                design services.
              </p>
              <button className="read_more">
                <span>Read More</span> <FaArrowRight />
              </button>
            </div>
            <div className="service">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="100"
                viewBox="0 0 1069.5 1066.6"
                enable-background="new 0 0 1069.5 1066.6;"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M1068.6,310.6c0,148.5,0,297.1,0,445.7c-0.5,1.2-1.2,2.5-1.4,3.8c-6.7,44.7-45.7,77-94.6,75.6c-29.4-0.9-58.9-0.2-88.3-0.2   c-3.7,0-7.4,0-11.9,0c4.1,46.6,8.1,91.8,11.9,136.9c2.6,31.4,4.9,62.8,7.3,94.2c-237.4,0-474.7,0-712.1,0c0-3.1-0.3-6.2,0-9.3   c4.5-52.2,9-104.3,13.5-156.5c1.8-21.3,3.7-42.7,5.6-65.3c-4.8,0-8.5,0-12.2,0c-30.2,0-60.4,0.1-90.5,0   c-55.4-0.2-93.3-38.2-93.4-93.8c-0.1-138.8-0.1-277.6,0-416.3c0-56.1,38-93.8,94.2-93.9c35.7-0.1,71.5,0,107.2,0   c3.7,0,7.3,0,11.9,0c0-77.8,0-154,0-230.6c213.4,0,425.9,0,639.7,0c0,76.9,0,153.4,0,230.6c5.1,0,8.9,0,12.6,0   c36.1,0,72.1,0,108.2,0c25,0,47,8.1,65.1,25.4C1057,271.5,1064.5,290.3,1068.6,310.6z M819.3,36.2c-189.5,0-378.1,0-567.4,0   c0,112.3,0,224.1,0,336.5c189.3,0,378.1,0,567.4,0C819.3,260.5,819.3,148.9,819.3,36.2z M853.7,1030.5   c-10.8-124.4-21.6-248.2-32.3-372c-191.3,0-380.9,0-571.6,0c-10.8,124.2-21.5,247.9-32.3,372   C430.1,1030.5,641.6,1030.5,853.7,1030.5z M1032.6,409.8c-332,0-663,0-994.1,0c0,35.4,0,70,0,105.2c331.5,0,662.6,0,994.1,0   C1032.6,479.7,1032.6,445.1,1032.6,409.8z M201.8,799.5c5.2-59.5,10.3-117.8,15.4-176.4c212.6,0,424.4,0,636.7,0   c5.2,59.2,10.3,117.7,15.4,176.3c13.5,0,25.8,0,38.3,0c0-82.9,0-165.2,0-247.3c-248.6,0-496.5,0-744.4,0c0,82.9,0,165,0,247.4   C176.3,799.5,188.6,799.5,201.8,799.5z M126.5,799.8c0-83.2,0-165.2,0-247.8c-29.5,0-58.4,0-87.1,0c-0.6,1.2-1.1,1.8-1.1,2.4   c0,65.2-0.7,130.4,0.3,195.6c0.4,27.5,22.3,48,49.5,49.7C100.5,800.5,113,799.8,126.5,799.8z M944.6,800c10.1,0,19.7,0,29.3,0   c37.6-0.1,59.2-21.8,59.2-59.6c0-59.3,0-118.6,0-177.9c0-3.4,0-6.7,0-10.4c-30.1,0-59,0-88.5,0C944.6,634.8,944.6,716.8,944.6,800z    M214.8,373c0-35.9,0-70.7,0-105.8c-42.8,0-84.8-0.6-126.7,0.2c-22.9,0.5-43.6,16.4-47.2,38.5c-3.6,21.9-2.7,44.5-3.8,67.1   C97.7,373,155.9,373,214.8,373z M856.1,372.5c59.2,0,117.9,0,177,0c0-16.5,0.1-32,0-47.6c-0.2-35.7-22.2-57.8-57.8-57.9   c-36.8-0.1-73.5,0-110.3,0c-3,0-6,0.4-8.9,0.6C856.1,303.1,856.1,337.6,856.1,372.5z" />
                  <path d="M269.6,976.9c0-11.8,0-22.7,0-34.2c177.3,0,354,0,531.6,0c0,11.1,0,22.3,0,34.2C624.3,976.9,447.4,976.9,269.6,976.9z" />
                  <path d="M783.6,854.4c0,11.3,0,22.2,0,34.7c-4.1,0-7.8,0-11.4,0c-157.8,0-315.6-0.1-473.4,0.2c-9.7,0-13-2.7-12-12.2   c0.7-7.2,0.1-14.5,0.1-22.7C452.7,854.4,617.8,854.4,783.6,854.4z" />
                  <path d="M748.1,782.9c0,11.6,0,22.6,0,34.3c-141.9,0-283.2,0-425.1,0c0-11.6,0-22.6,0-34.3C464.9,782.9,606.2,782.9,748.1,782.9z" />
                  <path d="M358.6,745.9c0-11.6,0-22.5,0-34.2c117.8,0,235.2,0,353.5,0c0,11.2,0,22.3,0,34.2C594.7,745.9,477.3,745.9,358.6,745.9z" />
                  <path d="M961.6,445.1c0,11.9,0,22.8,0,34.3c-11.5,0-22.5,0-34.2,0c0-11.3,0-22.5,0-34.3C938.7,445.1,949.6,445.1,961.6,445.1z" />
                  <path d="M856.4,444.9c11.5,0,22.1,0,33.7,0c0,11.4,0,22.5,0,34.4c-11,0-21.9,0-33.7,0C856.4,468.3,856.4,457.1,856.4,444.9z" />
                </g>
              </svg>
              <h2>Production</h2>
              <p>
                Product photography focuses on capturing high-quality images of
                products or goods.
              </p>
              <button className="read_more">
                <span>Read More</span> <FaArrowRight />
              </button>
            </div>
            <div className="service">
              <svg
                id="Capa_1"
                enableBackground="new 0 0 512 512"
                viewBox="0 0 512 512"
                width="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m192.25 437c-12.407 0-22.5 10.094-22.5 22.5s10.094 22.5 22.5 22.5 22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5zm0 30c-4.136 0-7.5-3.364-7.5-7.5s3.365-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5z"></path>
                  <path d="m184.75 497h15v15h-15z"></path>
                  <path d="m109.751 266.249h60v15h-60z"></path>
                  <path d="m109.751 228.749h60v15h-60z"></path>
                  <path d="m109.751 191.25h60v15h-60z"></path>
                  <path d="m109.751 153.75h60v15h-60z"></path>
                  <path d="m327.25 150c-15.151 0-29.469 4.907-41.405 14.191l9.209 11.84c9.279-7.217 20.412-11.031 32.196-11.031 28.949 0 52.5 23.552 52.5 52.5s-23.551 52.499-52.5 52.499c-28.948 0-52.5-23.551-52.5-52.499 0-11.785 3.814-22.919 11.031-32.197l-11.84-9.209c-9.284 11.937-14.191 26.254-14.191 41.406 0 37.219 30.28 67.499 67.5 67.499s67.5-30.28 67.5-67.499c0-37.22-30.28-67.5-67.5-67.5z"></path>
                  <path d="m462.25 244.615v-54.231h-22.824c-2.808-11.69-7.395-22.755-13.69-33.024l16.147-16.146-38.347-38.346-16.147 16.146c-10.272-6.296-21.336-10.883-33.022-13.689v-22.826h-19.617v-44.999c0-20.678-16.822-37.5-37.5-37.5h-210c-20.677 0-37.5 16.822-37.5 37.5v437c0 20.678 16.822 37.5 37.5 37.5h82.5v-15h-82.5c-12.406 0-22.5-10.094-22.5-22.5v-52.499h255v52.499c0 12.406-10.093 22.5-22.5 22.5h-82.5v15h82.5c20.678 0 37.5-16.822 37.5-37.5v-122h19.616v-22.825c11.693-2.808 22.756-7.394 33.024-13.688l16.146 16.146 38.347-38.347-16.147-16.146c6.297-10.271 10.883-21.336 13.69-33.023h22.824zm-229.635-229.615-7.5 15h-65.73l-7.5-15zm87.135 392.001h-255v-369.501c0-12.406 10.093-22.5 22.5-22.5h47.866l14.999 30h84.271l14.999-30h47.866c12.407 0 22.5 10.094 22.5 22.5v44.999h-19.615v22.826c-11.692 2.808-22.756 7.394-33.024 13.688l-16.147-16.146-38.346 38.347 16.146 16.146c-6.296 10.272-10.883 21.337-13.689 33.023h-22.826v54.231h22.825c2.808 11.691 7.395 22.756 13.689 33.022l-16.146 16.147 38.347 38.347 16.147-16.147c10.272 6.298 21.337 10.885 33.024 13.691v22.826h19.615v54.501zm106.224-171.241c-2.559 13.93-7.947 26.927-16.013 38.63l-3.545 5.143 14.253 14.253-17.134 17.134-14.253-14.253-5.143 3.546c-11.695 8.062-24.692 13.448-38.63 16.012l-6.144 1.129v20.146h-24.231v-20.148l-6.145-1.129c-13.928-2.559-26.925-7.946-38.63-16.014l-5.143-3.544-14.253 14.254-17.134-17.134 14.253-14.255-3.545-5.143c-8.062-11.695-13.449-24.691-16.012-38.629l-1.13-6.144h-20.145v-24.231h20.148l1.129-6.145c2.559-13.929 7.946-26.925 16.013-38.63l3.544-5.143-14.253-14.253 17.133-17.134 14.254 14.254 5.143-3.546c11.696-8.063 24.693-13.45 38.629-16.011l6.145-1.13v-20.146h24.231v20.149l6.145 1.129c13.928 2.559 26.925 7.945 38.629 16.012l5.143 3.544 14.253-14.253 17.133 17.133-14.253 14.253 3.545 5.144c8.064 11.698 13.452 24.695 16.013 38.63l1.129 6.145h20.147v24.231h-20.147z"></path>
                  <path d="m347.591 214.529h15v15h-15z"></path>
                  <path d="m332.591 184.53h15v15h-15z"></path>
                </g>
              </svg>
              <h2>Mobile App Development</h2>
              <p>
                Technology is shrinking, but it is also becoming more
                sophisticated.
              </p>
              <button className="read_more">
                <span>Read More</span> <FaArrowRight />
              </button>
            </div>
            <div className="service">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                width="100"
                viewBox="0 0 1069.5 1066.6"
                enable-background="new 0 0 1069.5 1066.6;"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M1068.6,310.6c0,148.5,0,297.1,0,445.7c-0.5,1.2-1.2,2.5-1.4,3.8c-6.7,44.7-45.7,77-94.6,75.6c-29.4-0.9-58.9-0.2-88.3-0.2   c-3.7,0-7.4,0-11.9,0c4.1,46.6,8.1,91.8,11.9,136.9c2.6,31.4,4.9,62.8,7.3,94.2c-237.4,0-474.7,0-712.1,0c0-3.1-0.3-6.2,0-9.3   c4.5-52.2,9-104.3,13.5-156.5c1.8-21.3,3.7-42.7,5.6-65.3c-4.8,0-8.5,0-12.2,0c-30.2,0-60.4,0.1-90.5,0   c-55.4-0.2-93.3-38.2-93.4-93.8c-0.1-138.8-0.1-277.6,0-416.3c0-56.1,38-93.8,94.2-93.9c35.7-0.1,71.5,0,107.2,0   c3.7,0,7.3,0,11.9,0c0-77.8,0-154,0-230.6c213.4,0,425.9,0,639.7,0c0,76.9,0,153.4,0,230.6c5.1,0,8.9,0,12.6,0   c36.1,0,72.1,0,108.2,0c25,0,47,8.1,65.1,25.4C1057,271.5,1064.5,290.3,1068.6,310.6z M819.3,36.2c-189.5,0-378.1,0-567.4,0   c0,112.3,0,224.1,0,336.5c189.3,0,378.1,0,567.4,0C819.3,260.5,819.3,148.9,819.3,36.2z M853.7,1030.5   c-10.8-124.4-21.6-248.2-32.3-372c-191.3,0-380.9,0-571.6,0c-10.8,124.2-21.5,247.9-32.3,372   C430.1,1030.5,641.6,1030.5,853.7,1030.5z M1032.6,409.8c-332,0-663,0-994.1,0c0,35.4,0,70,0,105.2c331.5,0,662.6,0,994.1,0   C1032.6,479.7,1032.6,445.1,1032.6,409.8z M201.8,799.5c5.2-59.5,10.3-117.8,15.4-176.4c212.6,0,424.4,0,636.7,0   c5.2,59.2,10.3,117.7,15.4,176.3c13.5,0,25.8,0,38.3,0c0-82.9,0-165.2,0-247.3c-248.6,0-496.5,0-744.4,0c0,82.9,0,165,0,247.4   C176.3,799.5,188.6,799.5,201.8,799.5z M126.5,799.8c0-83.2,0-165.2,0-247.8c-29.5,0-58.4,0-87.1,0c-0.6,1.2-1.1,1.8-1.1,2.4   c0,65.2-0.7,130.4,0.3,195.6c0.4,27.5,22.3,48,49.5,49.7C100.5,800.5,113,799.8,126.5,799.8z M944.6,800c10.1,0,19.7,0,29.3,0   c37.6-0.1,59.2-21.8,59.2-59.6c0-59.3,0-118.6,0-177.9c0-3.4,0-6.7,0-10.4c-30.1,0-59,0-88.5,0C944.6,634.8,944.6,716.8,944.6,800z    M214.8,373c0-35.9,0-70.7,0-105.8c-42.8,0-84.8-0.6-126.7,0.2c-22.9,0.5-43.6,16.4-47.2,38.5c-3.6,21.9-2.7,44.5-3.8,67.1   C97.7,373,155.9,373,214.8,373z M856.1,372.5c59.2,0,117.9,0,177,0c0-16.5,0.1-32,0-47.6c-0.2-35.7-22.2-57.8-57.8-57.9   c-36.8-0.1-73.5,0-110.3,0c-3,0-6,0.4-8.9,0.6C856.1,303.1,856.1,337.6,856.1,372.5z" />
                  <path d="M269.6,976.9c0-11.8,0-22.7,0-34.2c177.3,0,354,0,531.6,0c0,11.1,0,22.3,0,34.2C624.3,976.9,447.4,976.9,269.6,976.9z" />
                  <path d="M783.6,854.4c0,11.3,0,22.2,0,34.7c-4.1,0-7.8,0-11.4,0c-157.8,0-315.6-0.1-473.4,0.2c-9.7,0-13-2.7-12-12.2   c0.7-7.2,0.1-14.5,0.1-22.7C452.7,854.4,617.8,854.4,783.6,854.4z" />
                  <path d="M748.1,782.9c0,11.6,0,22.6,0,34.3c-141.9,0-283.2,0-425.1,0c0-11.6,0-22.6,0-34.3C464.9,782.9,606.2,782.9,748.1,782.9z" />
                  <path d="M358.6,745.9c0-11.6,0-22.5,0-34.2c117.8,0,235.2,0,353.5,0c0,11.2,0,22.3,0,34.2C594.7,745.9,477.3,745.9,358.6,745.9z" />
                  <path d="M961.6,445.1c0,11.9,0,22.8,0,34.3c-11.5,0-22.5,0-34.2,0c0-11.3,0-22.5,0-34.3C938.7,445.1,949.6,445.1,961.6,445.1z" />
                  <path d="M856.4,444.9c11.5,0,22.1,0,33.7,0c0,11.4,0,22.5,0,34.4c-11,0-21.9,0-33.7,0C856.4,468.3,856.4,457.1,856.4,444.9z" />
                </g>
              </svg>
              <h2>Printing</h2>
              <p>
                Printing technology has come a long way, and there are now many
                options for printing.
              </p>
              <button className="read_more">
                <span>Read More</span> <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Home;
