import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import { HiHome } from 'react-icons/hi';
import { MdLibraryAdd } from 'react-icons/md';
import { AiOutlineFileSearch } from 'react-icons/ai';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../Context/auth';

const ListEdited = () => {

    const navigate = useNavigate()
    const { isAuth } = useAuth()

    const [open, setOpen] = React.useState(true);

    const openCategory = () => {
        setOpen(!open);
    };

    const teste = ( e:any ) => {

        console.log( e )
    }
    
    return(
        <List
            sx={{ width: '100%', backgroundColor:"", color:"#F5F5F5" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader 
                    sx={{ width: '100%', backgroundColor:"rgba(28, 27, 35, 0.85%)", color:"#F5F5F5" }} 
                    component="div" 
                    id="nested-list-subheader"
                >
                    Outras opções
                </ListSubheader>
            }
        >
        <ListItemButton
            onClick={()=> navigate("/home")}
        >
            <ListItemIcon>
                <HiHome size={30}/>
            </ListItemIcon>
            <ListItemText 
            primary="Home" />
        </ListItemButton>

        <ListItemButton
            onClick={()=> navigate("/home/sectionProduct")}
        >
            <ListItemIcon>
                <StarBorder/>
            </ListItemIcon>
            <ListItemText 
            primary="Produtos" />
        </ListItemButton>

       {isAuth&&<ListItemButton
            onClick={()=> navigate("/createProduct")}
        >
            <ListItemIcon>
                <MdLibraryAdd size={30}/>
            </ListItemIcon>
            <ListItemText 
                primary="Criar Produto" />
        </ListItemButton>}

        <ListItemButton 
            onClick={openCategory}
        >
            <ListItemIcon>
                <AiOutlineFileSearch size={30}/>
            </ListItemIcon>
            <ListItemText primary="Categorias" />
                {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

                <ListItemButton sx={{ pl: 4 }} onClick={teste}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                    <ListItemText primary="Eletronicos" />
                </ListItemButton>

            </List>
        </Collapse>
      </List>
    )
}

export default ListEdited