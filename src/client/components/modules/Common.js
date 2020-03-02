import JobIcon1 from '../../img/job_icon_1.png';
import JobIcon2 from '../../img/job_icon_2.png';
import JobIcon3 from '../../img/job_icon_3.png';
import JobIcon4 from '../../img/job_icon_4.png';
import JobIcon5 from '../../img/job_icon_5.png';
import JobIcon6 from '../../img/job_icon_6.png';
import JobIcon7 from '../../img/job_icon_7.png';

class Common {
  static jobTypes() {
    const types = [
      {
        name: 'Planner',
        imgUrl: JobIcon1
      },
      {
        name: 'Programmer',
        imgUrl: JobIcon2
      },
      {
        name: 'Artist',
        imgUrl: JobIcon3
      },
      {
        name: 'Composer',
        imgUrl: JobIcon4
      },
      {
        name: 'Writer',
        imgUrl: JobIcon5
      },
      {
        name: 'Creator',
        imgUrl: JobIcon6
      },
      {
        name: 'Others',
        imgUrl: JobIcon7
      }
    ];
    return types;
  }

  static userExperience() {
    const experience = [
      {
        id: '0',
        title: '< 1 year'
      },
      {
        id: '1',
        title: '1 year'
      },
      {
        id: '2',
        title: '2 year'
      },
      {
        id: '3',
        title: '3 year'
      },
      {
        id: '4',
        title: '4 year'
      },
      {
        id: '5',
        title: '5 year'
      },
      {
        id: '6',
        title: '6 year'
      },
      {
        id: '7',
        title: '7 year'
      },
      {
        id: '8',
        title: '8 year'
      },
      {
        id: '9',
        title: '9 year'
      },
      {
        id: '10',
        title: '10 year'
      },
      {
        id: '11',
        title: '10 year+'
      }];
    return experience;
  }

  static userLang() {
    const userLanguage = [
      {
        LNG: 1,
        LNG_NAME: 'JAVA'
      },
      {
        LNG: 2,
        LNG_NAME: 'C'
      },
      {
        LNG: 3,
        LNG_NAME: 'C++'
      },
      {
        LNG: 4,
        LNG_NAME: 'Python'
      },
      {
        LNG: 5,
        LNG_NAME: '기타'
      }
    ];
    return userLanguage;
  }

  static getUserInfo() {
    return (sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo'))
      : {
        name: '',
        password: '',
        passwordConfirm: '',
        tel: '',
        email: '',
      });
  }

  static getUserType() {
    return sessionStorage.getItem('userType') ? sessionStorage.getItem('userType') : '';
  }


}

export default Common;
