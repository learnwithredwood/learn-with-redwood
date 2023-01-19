import { SOCIAL } from 'src/utils/Constants'
import { Icon } from '../../../Icon/Icon'

const Social = () => {
  return (
    <ul className="social flex gap-5 lg:gap-16 justify-center items-center list-none m-0 mb-16 p-0">
      {/* youtube */}
      {SOCIAL.youtube && (
        <li>
          <a
            href={SOCIAL.youtube}
            target="_blank"
            rel="noreferrer"
            className="text-cafeRoyale hover:text-gossamer"
          >
            <Icon name="youtube" />
          </a>
        </li>
      )}

      {/* instagram */}
      {SOCIAL.instagram && (
        <li>
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-cafeRoyale hover:text-gossamer"
          >
            <Icon name="instagram" />
          </a>
        </li>
      )}

      {/* twitter */}
      {SOCIAL.twitter && (
        <li>
          <a
            href={SOCIAL.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-cafeRoyale hover:text-gossamer"
          >
            <Icon name="twitter" />
          </a>
        </li>
      )}

      {/* github */}
      {SOCIAL.github && (
        <li>
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noreferrer"
            className="text-cafeRoyale hover:text-gossamer"
          >
            <Icon name="github" />
          </a>
        </li>
      )}

      {/* medium */}
      {SOCIAL.medium && (
        <li>
          <a
            href={SOCIAL.medium}
            target="_blank"
            rel="noreferrer"
            className="text-cafeRoyale hover:text-gossamer"
          >
            <Icon name="medium" />
          </a>
        </li>
      )}

      {/* ZEAL */}
      {SOCIAL.zeal && (
        <li>
          <a
            href={SOCIAL.zeal}
            target="_blank"
            rel="noreferrer"
            className="text-cafeRoyale hover:text-gossamer"
          >
            <Icon name="zeal" />
          </a>
        </li>
      )}
    </ul>
  )
}

export { Social }
