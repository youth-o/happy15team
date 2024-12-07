# 🗓️ Taskify Project 🗓️

> 코드잇 스프린트 FE 4기 Part3 - 15팀
>
> 개발 기간: 2024.4.15 ~ 5.1

URL: https://taskify15team.netlify.app/

## ⚙️ Installing

```
npm install
npm run build
npm start
```

## 💡 프로젝트 소개
### 모든 것을 한 곳에서!
일정 등록, 우선순위 설정, 팀원 초대까지 간편하게 관리하세요.

<div style="text-align: center;">
  <img src="https://github.com/user-attachments/assets/2f9f7907-f437-4629-bcc4-896aba3357ba" width="100%" height="100%">
</div>

- `나의 대시보드`
  - 내 대시보드와 초대받은 대시보드를 관리할 수 있으며, 페이지네이션 및 무한 스크롤을 지원해요.

- `대시보드 상세`
  - 대시보드 구성원과 칼럼을 확인하고 관리하며, 할 일 카드를 생성·수정·삭제할 수 있어요.

- `대시보드 생성 및 수정`
  - 대시보드를 생성하거나 이름과 색상을 수정할 수 있으며, 초대 및 구성원 관리 기능을 제공해요.

- `모달`
  - 카드의 상세 정보를 확인하고, 댓글을 작성·수정·삭제하거나 카드의 내용을 수정할 수 있어요.
  - 새 컬럼을 생성하거나 이름을 수정하고, 필요 시 모든 카드를 삭제할 수 있어요.
  - 유효한 이메일을 통해 유저를 초대할 수 있으며, 초대 리스트 관리가 가능해요.

- `계정 관리`
  - 프로필 이미지 및 닉네임을 수정하고, 비밀번호 변경 및 유효성 검증 기능을 제공해요.

## 💡 팀원 소개

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/parkwoohyeok">
      <img width=200px src="https://github.com/user-attachments/assets/fe620557-6cdd-45f8-9f30-f44ab2667da4" alt=""/><br />
      <sub><b>[FE] 박우혁</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/SeungAAA">
      <img width=170px height=200px src="https://github.com/user-attachments/assets/48896de5-8312-4270-b8f9-d2338bdfe8f0" alt=""/><br />
      <sub><b>[FE] 백승아</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/seungcar">
      <img width=200px src="https://github.com/user-attachments/assets/bf3435b2-df64-47db-8680-d8b0f4ec2422" alt=""/><br />
      <sub><b>[FE] 유승재</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/youth-o">
      <img width=200px src="https://github.com/user-attachments/assets/33d360fe-deea-4dff-a033-f8d997485ce8" alt=""/><br />
      <sub><b>[FE] 이유승</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

### 팀원 역할 및 담당 업무

| 이름      | 역할              | 주요 담당 업무                                                                                   |
| --------- | ----------------- | ----------------------------------------------------------------------------------------------- |
| **박우혁** | FE 개발 & 배포          | - 대시보드 상세 페이지 구현<br>- 드로그 앤 드랍 기능 구현<br>- 할 일 관련 모달 구현<br>- Netlify 배포 환경 설정         |
| **백승아** | FE 개발           | - 로그인 페이지 구현 구현<br>- 대시보드 수정 페이지 구현    |
| **유승재** | FE 개발           | - 사이드바 구현<br>- 나의 대시보드 페이지 구현<br>- 초대 기능 구현<br>- 공통 컴포넌트로 리팩토링 |
| **이유승** | FE 개발     | - 랜딩 페이지 구현<br>- 회원가입 페이지 구현<br>- 계정 관리 페이지 구현<br>- 로그인/회원가입 관련 모달 구현<br>- 유효성 검사 기능 구현           |

## 🛠️ 기술 스택

#### Development

<div style="margin: ; text-align: left;" "text-align: left;">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/Eslint-4B32C3?style=for-the-badge&logo=Eslint&logoColor=white">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">
  <img src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white">
</div>

#### Environment

 <div style="margin: ; text-align: left;" "text-align: left;"> 
   <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/>
   <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
   <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white">
   <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white"/>
   <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"/>
</div>

#### Config
   <img src="https://img.shields.io/badge/Npm-CB3837?style=for-the-badge&logo=Npm&logoColor=white">
