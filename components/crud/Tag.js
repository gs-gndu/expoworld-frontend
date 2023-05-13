import { useState, useEffect } from 'react';
import { getCookie } from '../../actions/auth';
import { create, getTags, removeTag } from '../../actions/tag';
import dynamic from 'next/dynamic';
const AdminDashLayout = dynamic(() => import('../AdminDashLayout'), {ssr: false});

import styles0 from "../../styles/tagsCategory.module.css"
import Head from 'next/head';

const Tag = () => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        error: false,
        success: false,
        tags: [],
        removed: false,
        reload: false
    });


    const head = () => (
        <Head>
            <title>Create Tag</title>
        </Head>
    );

    const { name, description, error, success, tags, removed, reload } = values;
    const token = getCookie('token');

    useEffect(() => {
        loadTags();
    }, [reload]);

    const loadTags = () => {
        getTags().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, tags: data });
            }
        });
    };

    const deleteConfirm = (slug) => {
        let answer = window.confirm('Are you sure you want to delete this Tag?');
        if (answer) {
            deleteTag(slug);
        }
    };

    const clickSubmit = e => {
        e.preventDefault();
        // console.log('create category', name);
        create({ name, description }, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({ ...values, error: false, success: false, name: '', description: '', removed: !removed, reload: !reload });
            }
        });
    };

    const handleChange = e => {
        setValues({ ...values, name: e.target.value, error: false, success: false, removed: '' });
    };
    const handleChangedesc = e => {
        setValues({ ...values, description: e.target.value, error: false, success: false, removed: '' });
    };

    const showSuccess = () => {
        if (success) {
            return <p>Tag is created</p>;
        }
    };

    const showError = () => {
        if (error) {
            return <p>Tag already exist</p>;
        }
    };

    const showRemoved = () => {
        if (removed) {
            return <p>Tag is removed</p>;
        }
    };

    const mouseMoveHandler = e => {
        setValues({ ...values, error: false, success: false, removed: '' });
    };



    // const showTags = () => {
    //     return tags.map((c, i) => {
    //         return (               

    //                 <div className={styles0.gridcontainer00}>
    //                     <div key={i} className={styles0.griditem00} >{c.name}</div>
    //                     <div key={i} className={styles0.griditem02} >{c.description}</div>
    //                     <button className={styles0.griditem03} onClick={() => deleteConfirm(c.slug)}>Delete</button>
    //                 </div>
                
    //         );
    //     });
    // };

    const showTags = () => {
        return tags.map((c) => {
          return (
            <div className={styles0.gridcontainer00} key={c.slug}>
              <div className={styles0.griditem00}>{c.name}</div>
              <div className={styles0.griditem02}>{c.description}</div>
              <button className={styles0.griditem03} onClick={() => deleteConfirm(c.slug)}>Delete</button>
            </div>
          );
        });
      };



    const deleteTag = (slug) => {
        // console.log('delete', slug);
        removeTag(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload });
            }
        });
    };

    const newTagFom = () => (
        <>
            <div className={styles0.wrapper}>
                <form onSubmit={clickSubmit} autoComplete="off">
                    <div className={styles0.createCategory}>

                        <div className={styles0.name} >Name</div>
                        <input className={styles0.inputs} value={name} required onChange={handleChange} type="text" placeholder="Name" />
                        <div className={styles0.description} >Description</div>
                        <textarea value={description} onChange={handleChangedesc} rows={5} cols={40}></textarea>
                        <div>
                            <button className={styles0.addtagbtn} type="submit" >
                                Add New Tag
                            </button>
                        </div>
                    </div>
                </form>
                <div>
                    <div className={styles0.gridcontainer000}>
                        <div className={styles0.griditem000} >Name</div>
                        <div className={styles0.griditem000} >Description</div>
                        <div className={styles0.griditem000} >Remove</div>
                    </div>
                    {showTags()}
                </div>
            </div>

        </>
    );

    return (
        <AdminDashLayout>
            {head()}
            <h1 className={styles0.Catname}>Tags</h1>
            <div style={{ height: "20px", marginBottom:"10px" }}>
                {showSuccess()}
                {showError()}
                {showRemoved()}
            </div>
            <div onMouseMove={mouseMoveHandler}>
                {newTagFom()}
                {/* {showCategories()} */}
            </div>
        </AdminDashLayout>
    );
};

export default Tag;