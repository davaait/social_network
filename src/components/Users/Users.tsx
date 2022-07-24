import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/—Pngtree—user icon_5097430.png';
import styles from './Users.module.css';

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        const pageCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        console.log(pageCount)
        const pages: Array<number> = [];
        for(let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        console.log(pages)
        return (
            <div>
                <div>
                    {
                        pages.map(p => {
                            // @ts-ignore
                            return <span className={this.props.currentPage === p && styles.selectedPage}
                            onClick={() => this.onPageChanged(p)}>{p}</span>
                        })
                    }

                </div>
                {
                    this.props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userPhoto} width={50} height={50}
                                 src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                            <span>
                        <span>{u.name}</span>
                        <span>{u.status}</span>
                    </span>
                        </div>
                    )
                }
            </div>
        );
    }
};
