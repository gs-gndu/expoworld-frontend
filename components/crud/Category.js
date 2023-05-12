import { useState, useEffect } from 'react';
import { getCookie } from '../../actions/auth';
import { create, getCategories, removeCategory } from '../../actions/category';
import dynamic from 'next/dynamic';
const AdminDashLayout = dynamic(() => import('../AdminDashLayout'), {ssr: false});
import styles0 from "../../styles/tagsCategory.module.css"
import Head from 'next/head';

const Category = () => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        error: false,
        success: false,
        categories: [],
        removed: false,
        reload: false
    });


    const head = () => (
        <Head>
            <title>Create Category</title>
        </Head>
    );



    const { name, description, error, success, categories, removed, reload } = values;
    const token = getCookie('token');

    useEffect(() => {
        loadCategories();
    }, [reload]);

    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, categories: data });
            }
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete this category?');
        if (answer) {
            deleteCategory(slug);
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
            return <p>Category is created</p>;
        }
    };

    const showError = () => {
        if (error) {
            return <p>Category already exist</p>;
        }
    };

    const showRemoved = () => {
        if (removed) {
            return <p>Category is removed</p>;
        }
    };

    const mouseMoveHandler = e => {
        setValues({ ...values, error: false, success: false, removed: '' });
    };


    const showCategories = () => {
        return categories.map((c) => {
          return (
            <div className={styles0.gridcontainer00} key={c.slug}>
              <div className={styles0.griditem00}>
                <div>{c.name}</div>
              </div>
              <div className={styles0.griditem02}>
                <div>{c.description}</div>
              </div>
              <button className={styles0.griditem03} onClick={() => deleteConfirm(c.slug)}>Delete</button>
            </div>
          );
        });
      };


    const deleteCategory = (slug) => {
        // console.log('delete', slug);
        removeCategory(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload });
            }
        });
    };

    const newCategoryFom = () => (
        <>
            <div className={styles0.wrapper}>
                <form onSubmit={clickSubmit} autoComplete="off">
                    <div className={styles0.createCategory}>

                        <div className={styles0.name} >Name</div>
                        <input className={styles0.inputs} value={name} required onChange={handleChange} type="text" placeholder="Name" />
                        <div className={styles0.description} >Description</div>


                        <textarea value={description} onChange={handleChangedesc} rows={5} cols={40}></textarea>


                        <div>
                            <button className={styles0.addCategorybtn} type="submit" >
                                Add New Category
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
                    {showCategories()}
                </div>
            </div>

        </>
    );

    return (
        <AdminDashLayout>
            {head()}
            <h1 className={styles0.Catname}>Categories</h1>
            <div style={{ height: "20px" }}>
                {showSuccess()}
                {showError()}
                {showRemoved()}
            </div>
            <div onMouseMove={mouseMoveHandler}>
                {newCategoryFom()}
                {/* {showCategories()} */}
            </div>
        </AdminDashLayout>
    );
};

export default Category;