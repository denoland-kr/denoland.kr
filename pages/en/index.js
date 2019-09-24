const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => <div className="block">{props.children}</div>;

    const Intro = () => (
      <Block>
        <div>
          <img
            src={`${baseUrl}img/denoland_kr-logo.png`}
            className="logo"
            alt="Deno Korea Logo"
          />
        </div>
        <div>
          <h1>Deno</h1>
          <p>
            A secure runtime for JavaScript
            <br /> and TypeScript built with V8, Rust, and Tokio
          </p>
        </div>
      </Block>
    );

    const Dashboard = () => {
      return (
        <Block>
          <div>
            <table>
              <tr>
                <th></th>
                <th>Linux &amp; Mac</th>
                <th>Windows</th>
                <th>설명</th>
              </tr>
              <tr>
                <th>
                  <a href="https://github.com/denoland/deno">deno</a>
                </th>
                <td>
                  <a href="https://travis-ci.com/denoland/deno">
                    <img src="https://travis-ci.com/denoland/deno.svg?branch=master" />
                  </a>
                </td>
                <td>
                  <a href="https://ci.appveyor.com/project/deno/deno">
                    <img src="https://ci.appveyor.com/api/projects/status/yel7wtcqwoy0to8x/branch/master?svg=true" />
                  </a>
                </td>
                <td>Deno 소스 저장소</td>
              </tr>
              <tr>
                <th>
                  <a href="https://github.com/denoland/deno_std">deno_std</a>
                </th>
                <td colSpan={2}>
                  <a href="https://dev.azure.com/denoland/deno_std/_build?definitionId=2">
                    <img src="https://dev.azure.com/denoland/deno_std/_apis/build/status/denoland.deno_std?branchName=master" />
                  </a>
                </td>
                <td>
                  외부 코드에 의존하지 않고 Deno<br/>코어팀이 리뷰한 기본 모듈들
                </td>
              </tr>
              <tr>
                <th>
                  <a href="https://github.com/denoland/deno_install">
                    deno_install
                  </a>
                </th>
                <td>
                  <a href="https://travis-ci.com/denoland/deno_install">
                    <img src="https://travis-ci.com/denoland/deno_install.svg?branch=master" />
                  </a>
                </td>
                <td>
                  <a href="https://ci.appveyor.com/project/deno/deno-install">
                    <img src="https://ci.appveyor.com/api/projects/status/gtekeaf7r60xa896?branch=master&svg=true" />
                  </a>
                </td>
                <td>Deno 인스톨러들</td>
              </tr>
              <tr>
                <th>
                  <a href="https://github.com/denoland/registry">registry</a>
                </th>
                <td colSpan={2}>
                  <a href="https://travis-ci.com/denoland/registry">
                    <img src="https://travis-ci.com/denoland/registry.svg?branch=master" />
                  </a>
                </td>
                <td>
                  Deno 를 위한 URL 리다이렉션 서비스
                  <br />
                  <a href="https://deno.land/x/">https://deno.land/x/</a> 와
                  모듈명과 버전명으로 <br />
                  구분하여 Github 등에 존재하는 소스로
                  <br />
                  이동시켜주는 서비스
                </td>
              </tr>
            </table>
          </div>
        </Block>
      );
    };

    const Installation = () => (
      <Block>
        <div>
          <h1>설치하기</h1>
          <h3>
            <MarkdownBlock>
              쉘을 사용하여 [설치하기](https://deno.land/#install)
            </MarkdownBlock>
          </h3>
          <h3>쉘을 사용하기:</h3>
          <MarkdownBlock>
            ```curl -fsSL https://deno.land/x/install/install.sh | sh```
          </MarkdownBlock>
          <h3>또는 파워쉘을 사용하기:</h3>
          <MarkdownBlock>
            ```iwr https://deno.land/x/install/install.ps1 -useb | iex```
          </MarkdownBlock>
          <h3>
            <a href="https://formulae.brew.sh/formula/deno">Homebrew</a>{' '}
            사용하기 (mac):
          </h3>
          <MarkdownBlock>```brew install deno```</MarkdownBlock>
          <h3>
            <a href="https://scoop.sh/">Scoop</a> 사용하기 (windows):
          </h3>
          <MarkdownBlock>```scoop install deno```</MarkdownBlock>
          <h3>
            <a href="https://crates.io/crates/deno_cli">Cargo 사용하기:</a>:
          </h3>
          <MarkdownBlock>```cargo install deno_cli```</MarkdownBlock>
          <div>
            설치에 대한 더 많은 옵션은 <a href="https://github.com/denoland/deno_install">deno_install</a> 를 참고하세요.
            
          </div>
        </div>
      </Block>
    );

    const Examples = () => (
      <Block>
        <div>
          <h1>예제</h1>
          <h3>간단한 프로그램을 바로 실행하기:</h3>
          <MarkdownBlock>```deno https://deno.land/welcome.ts```</MarkdownBlock>
          <h3>또는 조금 더 복잡한 프로그램 실행하기:</h3>
          <div className="code-block">
          <pre>
              {`import { serve } from "https://deno.land/std@v0.12/http/server.ts"
const body = new TextEncoder().encode("Hello World\\n");
const s = serve(":8000");
window.onload = async () => {
    console.log("http://localhost:8000/");
    for await (const req of s) {
      req.respond({ body });
    }
};`}
          </pre>
          </div>
        </div>
      </Block>
    );
    return (
      <div>
        <div className="mainContainer">
          <Intro />
          <Dashboard />
          <Installation />
          <Examples />
        </div>
      </div>
    );
  }
}

module.exports = Index;
