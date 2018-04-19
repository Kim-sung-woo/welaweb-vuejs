import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/views/Main'

//before-login
import Intro from '@/views/Intro'
import WelaBrand from '@/views/WelaBrand'
import BookInfo from '@/views/BookInfo'
import PriodicalEducation from '@/views/PriodicalEducation'
import JoinMember from '@/views/JoinMember'
import RegisterUser from '@/views/RegisterUser'
import UserFind from '@/views/UserFind'

//student
import IntroGreeting from '@/views/IntroGreeting'
import ListeningReading from '@/views/ListeningReading'
import Post from '@/views/Post'
import PostDetail from '@/views/PostDetail'
import PostManage from '@/views/PostManage'
import CommunityWinner from '@/views/CommunityWinner'
import CommunityPhoto from '@/views/CommunityPhoto'

//teacher
import Grade from '@/views/Grade'
import GradeDetail from '@/views/GradeDetail'
import StudentmanageList from '@/views/StudentmanageList'
import StudentmanageDetail from '@/views/StudentmanageDetail'
import ClassManage from '@/views/ClassManage'

Vue.use(VueRouter)

// export default new Router({
//   mode: 'history',
//   // saveScrollPosition: true,
//   scrollBehavior: () => ({ y: 0 }),
//   //TODO: Vue는 angular와는 달리 path당 component가 존재해야 router-view에 routers 트리를 타고
//   //TODO: 해당 컴포넌트를 그릴 수 있음. 즉 depth가 늘어날 때마다 컴포넌트를 만들고 그 안에 <router-view>를 추가해주어야함.
//   //TODO: 이에 대한 해결방안으로 path에만 depth를 분할 수 있도록 해놓고 컴포넌트는 만들지 않음.
export const routes = [
  {
    path: '/',
    name: 'main',
    redirect: '/before-login/intro',
    component: {
      render(c) {
        return c('router-view')
      }
    },
    children: [
      //TODO: start 'before-login' path
      {
        path: 'before-login',
        component: {
          render(c) {
            return c('router-view')
          }
        },
        children: [
          {
            label: '웰라 소개',
            path: 'intro',
            component: Intro
          },
          {
            label: 'BI',
            path: 'wela-brand',
            component: WelaBrand
          },
          {
            label: '교재 안내',
            path: 'book-info',
            component: BookInfo
          },
          {
            label: '정기 교육',
            path: 'priodical-education',
            component: PriodicalEducation
          },
          {
            label: '가맹 문의',
            path: 'join-member',
            component: JoinMember
          },
          {
            label: '회원 가입',
            path: 'register-user',
            component: RegisterUser
          },
          {
            label: '비밀번호 찾기',
            path: 'user-find',
            component: UserFind
          },

        ]
      },

      //TODO: start 'student' path
      {
        path: 'student',
        component: {
          render(c) {
            return c('router-view')
          }
        },
        children: [
          {
            label: '캠퍼스 소개',
            path: 'campus-intro',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                label: '웰라 소개',
                path: 'intro',
                component: Intro
              },
              {
                label: '원장님 인사말',
                path: 'intro-greeting',
                component: IntroGreeting
              }
            ]
          },
          {
            label: '교재 안내',
            path: 'book-info',
            component: BookInfo
          },
          {
            label: '학습 센터',
            path: 'training-center',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                headerText: '웰라 학습센터',
                label: 'Middle school English',
                path: 'company-middleschoolenglish',
                component: ListeningReading
              },
              {
                label: 'Level Test',
                path: 'company-leveltest',
                component: ListeningReading
              },
              {
                label: 'WeLA',
                path: 'company-wela',
                component: ListeningReading
              },
              {
                label: 'Best Friend',
                path: 'company-bestfriend',
                component: ListeningReading
              },
              {
                label: 'Story',
                path: 'company-story',
                component: ListeningReading
              },
              {
                label: 'Phonics',
                path: 'company-phonics',
                component: ListeningReading
              },
              {
                label: 'Vocabulary',
                path: 'company-vocabulary',
                component: ListeningReading
              },
              {
                label: 'Reading',
                path: 'company-reading',
                component: ListeningReading
              },
              {
                label: 'Writing',
                path: 'company-writing',
                component: ListeningReading
              },
              {
                label: 'Listening',
                path: 'company-listening',
                component: ListeningReading
              },
              {
                label: 'Newspaper',
                path: 'company-newspaper',
                component: ListeningReading
              },
              {
                label: 'Etc',
                path: 'company-etc',
                component: ListeningReading
              },

              {
                headerText: '캠퍼스 학습 센터',
                label: 'Middle school English',
                path: 'campus-middleschoolenglish',
                component: ListeningReading
              },
              {
                label: 'Listening',
                path: 'campus-listening',
                component: ListeningReading
              },
              {
                label: 'Reading',
                path: 'campus-reading',
                component: ListeningReading
              },
              {
                label: 'Phonics, Voca',
                path: 'campus-PhonicsVoca',
                component: ListeningReading
              },
              {
                label: 'Etc',
                path: 'campus-etc',
                component: ListeningReading
              },
              {
                label: 'Special Recording',
                path: 'campus-specialrecording',
                component: ListeningReading
              }
            ]
          },

          {
            label: '커뮤니티',
            path: 'community',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                label: '공지사항',
                path: 'notice',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '공지사항',
                    path: 'notice-list',
                    component: Post
                  },
                  {
                    label: '공지사항 상세',
                    path: 'notice-detail/:category/:modelType/:post',
                    component: PostDetail
                  }
                ]
              },
              {
                label: '숙제게시판',
                path: 'homework',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '숙제게시판',
                    path: 'homework-list',
                    component: Post
                  },
                  {
                    label: '숙제게시판 상세',
                    path: 'homework-detail/:category/:modelType/:post',
                    component: PostDetail
                  }
                ]
              },
              {
                label: '이달의 위너',
                path: 'winner',
                component: CommunityWinner,
              },
              {
                label: 'Essay 및 영작 게시판',
                path: 'essay',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: 'Essay 및 영작 게시판',
                    path: 'essay-list',
                    component: Post
                  },
                  {
                    label: 'Essay 및 영작 게시판 상세',
                    path: 'essay-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: 'Essay 및 영작 게시판 작성 및 수정',
                    path: 'essay-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '우리들의 이야기',
                path: 'ourstory',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '우리들의 이야기',
                    path: 'ourstory-list',
                    component: Post
                  },
                  {
                    label: '우리들의 이야기 상세',
                    path: 'ourstory-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '우리들의 이야기 작성 및 수정',
                    path: 'ourstory-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '캠퍼스 사진첩',
                path: 'gallery',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '캠퍼스 사진첩',
                    path: 'gallery-list',
                    component: CommunityPhoto
                  },
                  {
                    label: '캠퍼스 사진첩 상세',
                    path: 'gallery-detail/:category/:modelType/:post',
                    component: PostDetail
                  }
                ]
              },
              {
                label: '동영상 갤러리',
                path: 'video',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '동영상 갤러리',
                    path: 'video-list',
                    component: Post
                  },
                  {
                    label: '동영상 갤러리 상세',
                    path: 'video-detail/:category/:modelType/:post',
                    component: PostDetail
                  }
                ]
              }
            ]
          },
          {
            label: '자료실',
            path: 'data-center',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                label: '웰라 자료실',
                path: 'weladatacenter',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '웰라 자료실',
                    path: 'weladatacenter-list',
                    component: Post
                  },
                  {
                    label: '웰라 자료실 상세',
                    path: 'weladatacenter-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '웰라 자료실 작성 및 수정',
                    path: 'weladatacenter-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '캠퍼스 자료실',
                path: 'campusdatacenter',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '캠퍼스 자료실',
                    path: 'campusdatacenter-list',
                    component: Post
                  },
                  {
                    label: '캠퍼스 자료실 상세',
                    path: 'campusdatacenter-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '캠퍼스 자료실 작성 및 수정',
                    path: 'campusdatacenter-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              }
            ]
          }
        ]
      },

      //TODO: start 'teacher' path
      //준회원 원장님, 준회원 선생님(associate-academy)
      {
        path: 'associate-academy',
        component: {
          render(c) {
            return c('router-view')
          }
        },
        children: [
          {
            label: '웰라 잉글리쉬',
            path: 'wela-english',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                label: '웰라 소개',
                path: 'intro',
                component: Intro
              },
              {
                label: 'BI',
                path: 'wela-brand',
                component: WelaBrand
              },
            ]
          },
          {
            label: '캠퍼스 지원',
            path: 'campus-support',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                label: '교재 안내',
                path: 'book-info',
                component: BookInfo
              },
              {
                label: '정기 교육',
                path: 'priodical-education',
                component: PriodicalEducation
              },
            ]
          },
          {
            label: '내 캠퍼스',
            path: 'my-campus',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                label: '성적 관리',
                path: 'grade-manage',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '성적 관리',
                    path: 'grade-list',
                    component: Grade
                  },
                  {
                    label: '성적 관리 상세',
                    path: 'grade-detail/:studentId',
                    component: GradeDetail
                  }
                ]
              },
              {
                label: '학생 관리',
                path: 'student-manage',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '학생 관리',
                    path: 'studentmanage-list',
                    component: StudentmanageList
                  },
                  {
                    label: '학생 관리 상세',
                    path: 'studentmanage-detail/:student',
                    component: StudentmanageDetail
                  }
                ]
              },
              {
                label: '클래스 관리',
                path: 'class-manage',
                component: ClassManage
              }
            ]
          },
          {
            label: '학습 센터',
            path: 'training-center',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                headerText: '웰라 학습센터',
                label: 'Middle school English',
                path: 'company-middleschoolenglish',
                component: ListeningReading
              },
              {
                label: 'Level Test',
                path: 'company-leveltest',
                component: ListeningReading
              },
              {
                label: 'WeLA',
                path: 'company-wela',
                component: ListeningReading
              },
              {
                label: 'Best Friend',
                path: 'company-bestfriend',
                component: ListeningReading
              },
              {
                label: 'Story',
                path: 'company-story',
                component: ListeningReading
              },
              {
                label: 'Phonics',
                path: 'company-phonics',
                component: ListeningReading
              },
              {
                label: 'Vocabulary',
                path: 'company-vocabulary',
                component: ListeningReading
              },
              {
                label: 'Reading',
                path: 'company-reading',
                component: ListeningReading
              },
              {
                label: 'Writing',
                path: 'company-writing',
                component: ListeningReading
              },
              {
                label: 'Listening',
                path: 'company-listening',
                component: ListeningReading
              },
              {
                label: 'Newspaper',
                path: 'company-newspaper',
                component: ListeningReading
              },
              {
                label: 'Etc',
                path: 'company-etc',
                component: ListeningReading
              },

              {
                headerText: '캠퍼스 학습 센터',
                label: 'Middle school English',
                path: 'campus-middleschoolenglish',
                component: ListeningReading
              },
              {
                label: 'Listening',
                path: 'campus-listening',
                component: ListeningReading
              },
              {
                label: 'Reading',
                path: 'campus-reading',
                component: ListeningReading
              },
              {
                label: 'Phonics, Voca',
                path: 'campus-PhonicsVoca',
                component: ListeningReading
              },
              {
                label: 'Etc',
                path: 'campus-etc',
                component: ListeningReading
              },
              {
                label: 'Special Recording',
                path: 'campus-specialrecording',
                component: ListeningReading
              }
            ]
          },
          {
            label: '커뮤니티',
            path: 'community',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                label: '공지사항',
                path: 'notice',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '공지사항',
                    path: 'notice-list',
                    component: Post
                  },
                  {
                    label: '공지사항 상세',
                    path: 'notice-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '공지사항 작성 및 수정',
                    path: 'notice-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '숙제게시판',
                path: 'homework',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '숙제게시판',
                    path: 'homework-list',
                    component: Post
                  },
                  {
                    label: '숙제게시판 상세',
                    path: 'homework-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '숙제게시판 작성 및 수정',
                    path: 'homework-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '이달의 위너',
                path: 'winner',
                component: CommunityWinner,
              },
              {
                label: 'Essay 및 영작 게시판',
                path: 'essay',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: 'Essay 및 영작 게시판',
                    path: 'essay-list',
                    component: Post
                  },
                  {
                    label: 'Essay 및 영작 게시판 상세',
                    path: 'essay-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: 'Essay 및 영작 게시판 작성 및 수정',
                    path: 'essay-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '우리들의 이야기',
                path: 'ourstory',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '우리들의 이야기',
                    path: 'ourstory-list',
                    component: Post
                  },
                  {
                    label: '우리들의 이야기 상세',
                    path: 'ourstory-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '우리들의 이야기 작성 및 수정',
                    path: 'ourstory-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '캠퍼스 사진첩',
                path: 'gallery',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '캠퍼스 사진첩',
                    path: 'gallery-list',
                    component: CommunityPhoto
                  },
                  {
                    label: '캠퍼스 사진첩 상세',
                    path: 'gallery-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '캠퍼스 사진첩 작성 및 수정',
                    path: 'gallery-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '동영상 갤러리',
                path: 'video',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '동영상 갤러리',
                    path: 'video-list',
                    component: Post
                  },
                  {
                    label: '동영상 갤러리 상세',
                    path: 'video-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '동영상 갤러리 작성 및 수정',
                    path: 'video-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              }
            ]
          },
          {
            label: '자료실',
            path: 'data-center',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                label: '웰라 자료실',
                path: 'weladatacenter',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '웰라 자료실',
                    path: 'weladatacenter-list',
                    component: Post
                  },
                  {
                    label: '웰라 자료실 상세',
                    path: 'weladatacenter-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '웰라 자료실 작성 및 수정',
                    path: 'weladatacenter-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '캠퍼스 자료실',
                path: 'campusdatacenter',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '캠퍼스 자료실',
                    path: 'campusdatacenter-list',
                    component: Post
                  },
                  {
                    label: '캠퍼스 자료실 상세',
                    path: 'campusdatacenter-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '캠퍼스 자료실 작성 및 수정',
                    path: 'campusdatacenter-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              }
            ]
          }
        ]
      },

      //TODO: start 'admin' path
      //Admin
      {
        path: 'admin',
        component: {
          render(c) {
            return c('router-view')
          }
        },
        children: [
          {
            label: '선생님 그룹',
            path: 'teacher-group',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                label: '웰라 소식',
                path: 'welanews',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '웰라 소식',
                    path: 'welanews-list',
                    component: Post
                  },
                  {
                    label: '웰라 소식 상세',
                    path: 'welanews-detail/:category/:modelType/:post',
                    component: PostDetail
                  }
                ]
              },
              {
                label: '사랑방',
                path: 'sarangbang',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '사랑방',
                    path: 'sarangbang-list',
                    component: Post
                  },
                  {
                    label: '사랑방 상세',
                    path: 'sarangbang-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '사랑방 작성 및 수정',
                    path: 'sarangbang-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '초등 수업 자료실',
                path: 'elementrydatacenter',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '초등 수업 자료실',
                    path: 'elementrydatacenter-list',
                    component: Post
                  },
                  {
                    label: '초등 수업 자료실 상세',
                    path: 'elementrydatacenter-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '초등 수업 자료실 작성 및 수정',
                    path: 'elementrydatacenter-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '초등 게임 자료실',
                path: 'elementrygamecenter',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '초등 게임 자료실',
                    path: 'elementrygamecenter-list',
                    component: Post
                  },
                  {
                    label: '초등 게임 자료실 상세',
                    path: 'elementrygamecenter-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '초등 게임 자료실 작성 및 수정',
                    path: 'elementrygamecenter-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '중등 자료실',
                path: 'middlecenter',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '중등 자료실',
                    path: 'middlecenter-list',
                    component: Post
                  },
                  {
                    label: '중등 자료실 상세 상세',
                    path: 'middlecenter-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '중등 자료실 상세 작성 및 수정',
                    path: 'middlecenter-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }

                ]
              }
            ]
          },
          {
            label: '내 캠퍼스',
            path: 'my-campus',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                label: '성적 관리',
                path: 'grade-manage',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '성적 관리',
                    path: 'grade-list',
                    component: Grade
                  },
                  {
                    label: '성적 관리 상세',
                    path: 'grade-detail/:studentId',
                    component: GradeDetail
                  }
                ]
              },
              {
                label: '학생 관리',
                path: 'student-manage',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '학생 관리',
                    path: 'studentmanage-list',
                    component: StudentmanageList
                  },
                  {
                    label: '학생 관리 상세',
                    path: 'studentmanage-detail/:student',
                    component: StudentmanageDetail
                  }
                ]
              },
              {
                label: '클래스 관리',
                path: 'class-manage',
                component: ClassManage
              }
            ]
          },
          {
            label: '학습 센터',
            path: 'training-center',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                headerText: '웰라 학습센터',
                label: 'Middle school English',
                path: 'company-middleschoolenglish',
                component: ListeningReading
              },
              {
                label: 'Level Test',
                path: 'company-leveltest',
                component: ListeningReading
              },
              {
                label: 'WeLA',
                path: 'company-wela',
                component: ListeningReading
              },
              {
                label: 'Best Friend',
                path: 'company-bestfriend',
                component: ListeningReading
              },
              {
                label: 'Story',
                path: 'company-story',
                component: ListeningReading
              },
              {
                label: 'Phonics',
                path: 'company-phonics',
                component: ListeningReading
              },
              {
                label: 'Vocabulary',
                path: 'company-vocabulary',
                component: ListeningReading
              },
              {
                label: 'Reading',
                path: 'company-reading',
                component: ListeningReading
              },
              {
                label: 'Writing',
                path: 'company-writing',
                component: ListeningReading
              },
              {
                label: 'Listening',
                path: 'company-listening',
                component: ListeningReading
              },
              {
                label: 'Newspaper',
                path: 'company-newspaper',
                component: ListeningReading
              },
              {
                label: 'Etc',
                path: 'company-etc',
                component: ListeningReading
              },

              {
                headerText: '캠퍼스 학습 센터',
                label: 'Middle school English',
                path: 'campus-middleschoolenglish',
                component: ListeningReading
              },
              {
                label: 'Listening',
                path: 'campus-listening',
                component: ListeningReading
              },
              {
                label: 'Reading',
                path: 'campus-reading',
                component: ListeningReading
              },
              {
                label: 'Phonics, Voca',
                path: 'campus-PhonicsVoca',
                component: ListeningReading
              },
              {
                label: 'Etc',
                path: 'campus-etc',
                component: ListeningReading
              },
              {
                label: 'Special Recording',
                path: 'campus-specialrecording',
                component: ListeningReading
              }
            ]
          },

          {
            label: '커뮤니티',
            path: 'community',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                label: '공지사항',
                path: 'notice',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '공지사항',
                    path: 'notice-list',
                    component: Post
                  },
                  {
                    label: '공지사항 상세',
                    path: 'notice-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '공지사항 작성 및 수정',
                    path: 'notice-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '숙제게시판',
                path: 'homework',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '숙제게시판',
                    path: 'homework-list',
                    component: Post
                  },
                  {
                    label: '숙제게시판 상세',
                    path: 'homework-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '숙제게시판 작성 및 수정',
                    path: 'homework-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '이달의 위너',
                path: 'winner',
                component: CommunityWinner,
              },
              {
                label: 'Essay 및 영작 게시판',
                path: 'essay',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: 'Essay 및 영작 게시판',
                    path: 'essay-list',
                    component: Post
                  },
                  {
                    label: 'Essay 및 영작 게시판 상세',
                    path: 'essay-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: 'Essay 및 영작 게시판 작성 및 수정',
                    path: 'essay-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '우리들의 이야기',
                path: 'ourstory',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '우리들의 이야기',
                    path: 'ourstory-list',
                    component: Post
                  },
                  {
                    label: '우리들의 이야기 상세',
                    path: 'ourstory-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '우리들의 이야기 작성 및 수정',
                    path: 'ourstory-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '캠퍼스 사진첩',
                path: 'gallery',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '캠퍼스 사진첩',
                    path: 'gallery-list',
                    component: CommunityPhoto
                  },
                  {
                    label: '캠퍼스 사진첩 상세',
                    path: 'gallery-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '캠퍼스 사진첩 작성 및 수정',
                    path: 'gallery-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '동영상 갤러리',
                path: 'video',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '동영상 갤러리',
                    path: 'video-list',
                    component: Post
                  },
                  {
                    label: '동영상 갤러리 상세',
                    path: 'video-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '동영상 갤러리 작성 및 수정',
                    path: 'video-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              }
            ]
          },
          {
            label: '자료실',
            path: 'data-center',
            component: {
              render(c) {
                return c('router-view')
              }
            },
            children: [
              {
                label: '웰라 자료실',
                path: 'weladatacenter',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '웰라 자료실',
                    path: 'weladatacenter-list',
                    component: Post
                  },
                  {
                    label: '웰라 자료실 상세',
                    path: 'weladatacenter-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '웰라 자료실 작성 및 수정',
                    path: 'weladatacenter-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              },
              {
                label: '캠퍼스 자료실',
                path: 'campusdatacenter',
                component: {
                  render(c) {
                    return c('router-view')
                  }
                },
                children: [
                  {
                    label: '캠퍼스 자료실',
                    path: 'campusdatacenter-list',
                    component: Post
                  },
                  {
                    label: '캠퍼스 자료실 상세',
                    path: 'campusdatacenter-detail/:category/:modelType/:post',
                    component: PostDetail
                  },
                  {
                    label: '캠퍼스 자료실 작성 및 수정',
                    path: 'campusdatacenter-manage/:category/:manageType/:modelType/:post',
                    component: PostManage
                  }
                ]
              }
            ]
          }
        ]
      },

    ]
  }
];

export default new VueRouter({
  routes,
  mode: 'history',
  // saveScrollPosition: true,
  scrollBehavior: () => ({ y: 0 }),
  //TODO: Vue는 angular와는 달리 path당 component가 존재해야 router-view에 routers 트리를 타고
  //TODO: 해당 컴포넌트를 그릴 수 있음. 즉 depth가 늘어날 때마다 컴포넌트를 만들고 그 안에 <router-view>를 추가해주어야함.
  //TODO: 이에 대한 해결방안으로 path에만 depth를 분할 수 있도록 해놓고 컴포넌트는 만들지 않음.
})

