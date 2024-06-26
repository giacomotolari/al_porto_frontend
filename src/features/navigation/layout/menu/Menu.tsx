import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";
import { book, bookmark, heart, home, informationCircle } from "ionicons/icons";
import { useLocation } from "react-router-dom";
import "./Menu.css";
import { paths } from "../../routing/paths";
import { pages } from "../../../../pages/pages";

interface AppPage {
  title: string;
  url: string;
  icon: string;
}

const appPages: AppPage[] = [
  {
    title: pages.home,
    url: paths.home,
    icon: home,
  },
  {
    title: pages.book,
    url: paths.book,
    icon: book,
  },
  {
    title: pages.favorites,
    url: paths.favorites,
    icon: heart,
  },
  {
    title: pages.bookmarks,
    url: paths.bookmarks,
    icon: bookmark,
  },
  {
    title: pages.about,
    url: paths.about,
    icon: informationCircle,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Contact</IonListHeader>
          <IonNote>duiliadias@gmail.com</IonNote>
          {appPages.map((appPage) => {
            return (
              <IonMenuToggle key={appPage.title} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    icon={appPage.icon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
