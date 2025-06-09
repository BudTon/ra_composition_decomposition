import './aside-header.css'

export default function AsideHeader({asideHeader, asideImgHeader}) {
  return (
    <>
      <aside className="aside-header">
        <img src={asideImgHeader} alt="..." className="img-aside-header"/>
        <a href="#" className="a-aside-header">{asideHeader.linkAsidHeaderTitle}</a>
        <p className="p-aside-header">{asideHeader.asidHeaderTitle}</p>
      </aside>
    </>
  )
}