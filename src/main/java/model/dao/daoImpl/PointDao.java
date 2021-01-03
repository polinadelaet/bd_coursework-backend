package model.dao.daoImpl;

import model.dao.Dao;
import model.entity.PointEntity;
import model.utils.SessionFactorySingleton;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import java.util.List;


public class PointDao implements Dao<PointEntity> {

    @Override
    public void save(PointEntity pointEntity) {
        Session session = null;
        SessionFactory sessionFactory = null;
        Transaction transaction = null;
        try {
        sessionFactory = SessionFactorySingleton.getSessionFactory();
        session = sessionFactory.openSession();
        transaction = session.beginTransaction();

        session.save(pointEntity);
        System.out.println("Inserted Successfully");
        session.getTransaction().commit();
        //session.close();
        //sessionFactory.close();
        } catch (RuntimeException runtimeException) {
            transaction.rollback();
        } finally {
        if (session != null) {
            session.close();
            sessionFactory.close();
        }
    }
    }

    @Override
    public List<PointEntity> getAll() {
        return null;
    }
}
