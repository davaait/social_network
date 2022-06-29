import styles from './users.module.css';
import usersPhoto from '../../assets/images/user_icon.png'
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 0; i <= pagesCount; i++) {
    pages.push(i);
  }
  return <div>
    <div>
      {pages.map(p => {
        // return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => {
        return <span onClick={(e) => {
          props.onPageChanged(p)
        }
        }>{p}</span>
      })}
    </div>
    {
      props.users.map((u: any) => <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small !== null ? u.photos.small : usersPhoto} className={styles.userPhoto}/>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => {
                  props.unfollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                  props.follow(u.id)
                }}>Follow</button>}
            </div>
          </span>
          <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
        </div>
      )
    }
  </div>
}
