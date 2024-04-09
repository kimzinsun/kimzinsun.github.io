import React from "react";
import "./App.css";

function App() {
  return (
    <div className="px-72 text-xl ">
      <header className="h-64 items-center  header-container flex flex-col justify-center">
        <h1 className="text-6xl mb-2">Kim Jin Seon</h1>
        <h5 className="text-xl">kwlstjs00@gmail.com</h5>
      </header>
      <div className="">
        <div className="nes-container with-text-3xl is-centered is-rounded">
          <p className="text-3xl ">Introduce</p>
          <p>안녕 나를 소개하지 이름 김진선 직업은 Home Protector.. </p>
        </div>
        <div className="nes-container with-text-3xl is-centered mt-10 ">
          <p className="text-3xl">skills</p>
          <div className="pt-3 grid grid-cols-1 gap-y-5 ">
            <div className="nes-field is-inline">
              <button type="button" className="nes-btn is-primary self-start mb-3 ">
                Language
              </button>
              <div className="ml-8 flex flex-wrap items-start gap-x-4">
                <label className="mb-2">
                  <input type="checkbox" className="nes-checkbox" checked readOnly />
                  <span>JAVA</span>
                </label>
                <label className="mb-2">
                  <input type="checkbox" className="nes-checkbox" checked readOnly />
                  <span>JavaScript</span>
                </label>
                <label className="mb-2">
                  <input type="checkbox" className="nes-checkbox" checked readOnly />
                  <span>HTML/CSS</span>
                </label>
                <label className="mb-2">
                  <input type="checkbox" className="nes-checkbox" checked readOnly />
                  <span>KOTLIN</span>
                </label>
              </div>
            </div>
            <div className="nes-field is-inline">
              <button type="button" className="nes-btn is-success self-start mb-3">
                Frameworks
              </button>
              <div className="ml-4 flex flex-wrap items-start gap-x-4">
                <label className="mb-2">
                  <input type="checkbox" className="nes-checkbox" checked readOnly />
                  <span>SpringBoot</span>
                </label>
                <label className="mb-2">
                  <input type="checkbox" className="nes-checkbox" checked readOnly />
                  <span>Next.js</span>
                </label>
              </div>
            </div>
            <div className="nes-field is-inline">
              <button type="button" className="nes-btn is-warning self-start mb-3">
                Database
              </button>
              <div className="ml-8 flex flex-wrap items-start gap-x-4">
                <label className="mb-2">
                  <input type="checkbox" className="nes-checkbox" checked readOnly />
                  <span>MySQL</span>
                </label>
              </div>
            </div>
            <div className="nes-field is-inline">
              <button type="button" className="nes-btn is-error self-start mb-3">
                Tools&IDEs
              </button>
              <div className="ml-4 flex flex-wrap items-start gap-x-4">
                <label className="mb-2">
                  <input type="checkbox" className="nes-checkbox" checked readOnly />
                  <span>IntelliJ</span>
                </label>
                <label className="mb-2">
                  <input type="checkbox" className="nes-checkbox" checked readOnly />
                  <span>VS Code</span>
                </label>
                <label className="mb-2">
                  <input type="checkbox" className="nes-checkbox" checked readOnly />
                  <span>Git</span>
                </label>
                <label className="mb-2">
                  <input type="checkbox" className="nes-checkbox" checked readOnly />
                  <span>Bitbucket</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="nes-container with-text-3xl is-centered mt-10">
          <p className="text-3xl">Experience</p>
          <div className="pt-3">
            <div className="nes-container is-dark with-text-3xl">
              <p className="text-3xl">Home Protector</p>
              <p>2021.01 ~ 현재</p>
              <p>집을 지키는 사람</p>
            </div>
            {/* <div className="nes-container with-text-3xl mt-5">
              <p className="text-3xl">Shinsegae I&C KDT</p>
              <p>2023.10 ~ 2024.04</p>
              <p>신세계 아이앤씨 K-디지털 트레이닝 수료</p>
            </div>

            <div className="nes-container with-text-3xl mt-5">
              <p className="text-3xl">ICT supporters</p>
              <p>2020.06 ~ 2020.12</p>
              <p></p>
            </div> */}
          </div>
        </div>
        {/* project */}
        <div className="nes-container with-text-3xl is-centered mt-10">
          <p className="text-3xl">Project</p>
          <div className="pt-3">
            <div className="nes-container with-text-3xl mt-5">
              <p className="text-3xl">Qudditch</p>
              <p>2024.02 ~ 2024.04</p>
              <div className="lists mx-72 ">
                <ul className="nes-list is-disc">
                  <li>
                    무인 편의점 관리 시스템 <i className="nes-icon github  is-small"></i>
                  </li>
                  <li>FullStack, Java, Next.js </li>
                  <li>QR code 출입, 재고조회/입고/폐기, 관리자 페이지</li>
                </ul>
              </div>
            </div>
            <div className="nes-container with-text-3xl mt-5">
              <p className="text-3xl">PharmaFinder</p>
              <p>2024.01 ~ 2024.02</p>
              <div className="lists mx-72 ">
                <ul className="nes-list is-disc">
                  <li>
                    약국 재고 확인 사이트 <i className="nes-icon github  is-small"></i>
                  </li>
                  <li>FullStack, Java, Jsp </li>
                  <li>주변 약국 검색 및 약국 재고 조회</li>
                </ul>
              </div>
            </div>
            <div className="nes-container with-text-3xl mt-5">
              <p className="text-3xl">Tovelop</p>
              <p>2023.07 ~ 2023.08</p>
              <div className="lists mx-72 ">
                <ul className="nes-list is-disc">
                  <li>
                    대학생 전공별 커뮤니티 앱 <i className="nes-icon github  is-small"></i>
                  </li>
                  <li>BackEnd, Kotlin </li>
                  <li>댓글 및 프로필 히스토리 로직 설계 및 구현</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 px-3">
          <p className="text-4xl ">
            <i className="nes-icon star"></i>ETC
          </p>
          <div className="lists px-8 text-2xl">
            <ul className="nes-list is-disc">
              <li>정보처리기사</li>
              <li>SQLD</li>
              <li>파이썬 교육봉사</li>
              <li>ICT 서포터즈</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-24 ">
        <section className="message-list">
          <section className="message -left">
            <i className="nes-kirby"></i>
            <div className="nes-balloon from-left text-4xl">
              <p>
                Contact.... <i className="nes-icon  heart"></i>
              </p>
              <div className="flex gap-5">
                <i className="nes-icon github is-large"></i>
                <i className="nes-icon gmail is-large"></i>
                <i className="nes-icon instagram is-large"></i>
              </div>
            </div>
          </section>
        </section>
      </div>
      <div className="">
        <progress className="nes-progress is-pattern " value="100" max="100"></progress>
      </div>
    </div>
  );
}

export default App;
