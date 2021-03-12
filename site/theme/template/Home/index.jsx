import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'bisheng/router';
import { injectIntl } from 'react-intl';
import { Popover, Button, Row, Col } from 'antd';
import landing from './landing.png';
import quncode from './qun.jpg';
import personalcode from './personal.jpg';
function getStyle() {
  return `
    .main-wrapper {
      padding: 0;
    }
    #header {
      box-shadow: none;
      width: 100%;
    }
    #header,
    #header .ant-select-selection,
    #header .ant-menu {
      background: transparent;
    }
  `;
}

const HomePage = (props) => {
  const addSeparater = (str) => {
    const arr = str.split('|');
    // arr.splice(1, 0 <span>|</span>)
    return [arr[0], <span key="divider" className="divider" />, arr[1]];
  };

  return (
    <DocumentTitle title={`Dantd - ${props.intl.formatMessage({ id: 'app.home.slogan' })}`}>
      <div className="main-wrapper">
        <section className="home-s1">
          <div
            className="banner-wrapper"
            style={{ background: `url(${landing}) no-repeat center / cover` }}
          >
            <div className="banner-text-wrapper">
              <h2 key="h2">Dantd</h2>
              <p>
                一个基于
                <a href="https://ant.design/"> Antd-v3 </a>
                所封装的业务组件库
              </p>
              <div key="button1" className="start-button">
                <Link to={'/docs/introduce'}>
                  <Button type="primary" size="large">
                    开始使用
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="home-s3">
          <h3>🌈 &nbsp;赋能业务开发，提供业务常用，而 Antd 没有直接提供的组件</h3>
        </section>
        <section className="home-s4">
          <div className="wrapper">
            <h3>联系我们</h3>
            <div className="sub-title">欢迎扫描下方二维码，加入我们的用户交流群，若二维码过期，可添加小客服微信zj80900111拉你入群，暗号：dantd</div>
            <div className="img-wrapper">
              <a><img src={quncode} alt="" /></a>
            </div>
          </div>
        </section>
        <style dangerouslySetInnerHTML={{ __html: getStyle() }} />
      </div>
    </DocumentTitle>
  );
};

export default injectIntl(HomePage);
