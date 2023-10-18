import ScreenSaver from "../../../../components/ScreenSaver"

function ScreenSaverColor({ params }) {
  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={params.color} />
    </main>
  )
}

export default ScreenSaverColor