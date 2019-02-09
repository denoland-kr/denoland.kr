![deno](https://deno.land/deno_logo_2.gif)

# Deno

A new way to JavaScript

|                                                          | Linux & Mac                                                                                              | Windows                                                                                       |                                                                                                                                          |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [deno](https://github.com/denoland/deno)                 | ![build](https://travis-ci.com/denoland/deno.svg?branch=master)                                          | ![build](https://ci.appveyor.com/api/projects/status/yel7wtcqwoy0to8x/branch/master?svg=true) | Deno 소스 저장소                                                                                                                         |
| [deno_std](https://github.com/denoland/deno_std)         | ![build](https://dev.azure.com/denoland/deno_std/_apis/build/status/denoland.deno_std?branchName=master) |                                                                                               | 외부 코드에 의존하지 않고 Deno 코어팀이 리뷰한 기본 모듈들                                                                               |
| [deno_install](https://github.com/denoland/deno_install) | ![build](https://api.travis-ci.com/denoland/deno_install.svg?branch=master)                              | ![build](https://ci.appveyor.com/api/projects/status/gtekeaf7r60xa896?branch=master&svg=true) | Deno 인스톨러들                                                                                                                          |
| [registry](https://github.com/denoland/registry)         |                                                                                                          |                                                                                               | Deno 를 위한 URL 리다이렉션 서비스, https://deno.land/x/ 와 모듈명과 버전명으로 구분하여 Github 등에 존재하는 소스로 이동시켜주는 서비스 |

> TypeScript 를 위한 새로운 JavaScript 런타임 [Deno](https://deno.land/) 에 대한 한국어 자료. Deno 와 관련 된 한국어 대화는 현재 [Seouljs](https://seoul.js.org/) 의 슬랙채널 #deno 에 진행 중. 관심 있다면 해당 링크를 사용.

# [Install](https://deno.land/#install)

With Shell

```sh
curl -L https://deno.land/x/install/install.sh | sh
export PATH=$HOME/.deno/bin:$PATH
```

With PowerShell

```sh
iex (iwr https://deno.land/x/install/install.ps1)
```

# [Mini-tutorial](https://deno.land/#mini-tutorial)

간단히 Deno 프로그램을 테스트 할 수 있다. 로컬 디렉토리를 HTTP 로 서빙한다.

```sh
alias file_server="deno \
  https://deno.land/x/http/file_server.ts --allow-net"
```

다음과 같이 실행한다. `file_server.ts` 를 다운로드 후에 실행된다:

```sh
% file_server .
Downloading https://deno.land/x/http/file_server.ts...
[...]
HTTP server listening on http://0.0.0.0:4500/
```

만약 최신 버전으로 업데이트 하고 싶다면 다음 명령을 사용한다.

```sh
file_server --reload
```

# Dig in...

[Documentation](https://github.com/denoland/deno/blob/master/Docs.md): Deno 문서

[API Reference](https://deno.land/typedoc/index.html): API 레퍼런스

[Links to other Deno resources](https://github.com/denolib/awesome-deno)

# Continuous Benchmark

다음 표들은 매번 커밋 마다 업데이트 된다.

[master branch](https://github.com/denoland/deno)

## Execution time

다음 몇 가지 간단한 Deno 프로그램들 의 실행 시간을 보여준다:

[tests/002_hello.ts](https://github.com/denoland/deno/blob/master/tests/002_hello.ts)

와

[tests/003_relative_import.ts](https://github.com/denoland/deno/blob/master/tests/003_relative_import.ts)

먼저 Deno 가 실행 되면 먼저 Typescript 는 JS 로 컴파일 된다. 이후 `warm startup` 으로 시작 되면 TS 컴파일 단계를 사용하지 않고 이미 캐쉬 된 JS 를 사용한다. `cold startup` 은 반드시 처음 부터 컴파일 단계를 사용한다.

[벤치마크 결과 보러가기](https://deno.land/#exec-time)

## Throughput

Deno 를 사용해서 일정량의 데이터 송신에 사용 된 시간을 보여준다. [echo_server.ts](https://github.com/denoland/deno/blob/master/tests/echo_server.ts) 와 [cat.ts](https://github.com/denoland/deno/blob/master/tests/cat.ts) 테스트 이다. 작은 값이 좋다.

[벤치마크 결과 보러가기](https://deno.land/#throughput)

## Req/Sec

HTTP 서버의 퍼포먼스의 테스트. 10 개의 커넥션을 유지해서 (keep-alive) hello-world 요청을 가능한 많이 보냈다. 수치가 클 수록 좋다.

- [deno](https://github.com/denoland/deno/blob/master/tests/http_bench.ts) 은 가상의 HTTP 서버, HTTP 파싱을 하지 않는다. [node_tcp](https://github.com/denoland/deno/blob/master/tools/node_tcp.js) 와 비교한다.
- [deno_net_http](https://github.com/denoland/deno_std/blob/master/http/http_bench.ts) 은 TypeScript 로 만들어진 웹서버이다. [node_http](https://github.com/denoland/deno/blob/master/tools/node_http.js) 와 비교한다.
- [hyper](https://github.com/denoland/deno/blob/master/tools/hyper_hello.rs) 은 Rust 기반 HTTP 서버이고 서버 수치들의 상한/선이다

[벤치마크 결과 보러가기](https://deno.land/#req-per-sec)

## Executable size

Deno 는 한 개의 바이너리로 릴리즈 된다. 파일 그 사이즈 변화를 알 수 있다.

[벤치마크 결과 보러가기](https://deno.land/#size)

## Thread count

프로그램들이 얼마나 많은 쓰레드를 사용하는지 알 수 있다.

[벤치마크 결과 보러가기](https://deno.land/#threads)

## Syscall count

스크립트가 실행 될 때 얼마나 많은 `syscall` 이 사용하는지 알 수 있다.

[벤치마크 결과 보러기기](https://deno.land/#threads)

## 이전 모든 벤치마크
[벤치마크 결과 보러가기](https://deno.land/all_benchmark.html)

# License

저작권은 모두 원저자들에게 있다. 번역을 포함한 다른 자료들의 저작권은 아래와 같다.

MIT @ [denoland.kr](https://github.com/denoland-kr)
