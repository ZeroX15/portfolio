import './Links.css'
const Links = () => {
  return (
    <>
    <div className="Links">
      <div className="Partners">
        <h1>Parcerias: </h1>
        <div className="Profiles">
          <p>Em breve</p>
        </div>
        <div className="Profiles">
          <p>Em breve</p>
        </div>
      </div>
      <div className="Network">
        <h1>Minhas redes sociais: </h1>
        <div className="Nets">
          <img src="../src/assets/linkedin.png" alt="Linkedin" />
          <a href='https://www.linkedin.com/in/marcelo-josé-6a4321222/'>Marcelo José</a>
        </div>
        <div className="Nets">
          <img src="../src/assets/github.png" alt="GitHub" />
          <a href='https://github.com/ZeroX15/'>@ZeroX15</a>
        </div>
        <div className="Nets">
          <img src="../src/assets/discord.png" alt="Discord" />
          <a href='https://discordapp.com/users/319256076178423810'>@zerox_ap</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Links